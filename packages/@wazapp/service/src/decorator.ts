import Service from "./service";
import { getOwner, Owner } from "@wazapp/core";

export function service<T extends Service>(serviceClass: new(owner: Owner) => T): PropertyDecorator {
  return function() {
    return {
      enumerable: true,
      configurable: false,

      get(): T {
        const owner = getOwner(this);
        const service = owner.lookup<T>(serviceClass);
        return service || owner.register(serviceClass, new serviceClass(owner));
      }
    }
  }
}