import { Owner, useOwner } from '@wazapp/core';
import Service from './service'

export function useService<T extends Service>(serviceClass: new(owner: Owner) => T): T {
  const owner = useOwner();
  const service = owner.lookup<T>(serviceClass);
  return service || owner.register(serviceClass, new serviceClass(owner));
}