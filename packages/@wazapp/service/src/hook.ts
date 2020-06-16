import { useContext } from 'react';
import { Owner } from '@wazapp/core';
import { OwnerContext } from '@wazapp/core';
import Service from './service'

export function useService<T extends Service>(serviceClass: new(owner: Owner) => T): T {
  const owner = useContext(OwnerContext)
  const service = owner.lookup<T>(serviceClass);
  return service || owner.register(serviceClass, new serviceClass(owner));
}