import Service from "./service";
import { getContainer, Container } from "@wazapp/core";

export function service<T extends Service>(serviceClass: new(container: Container) => T): PropertyDecorator {
  return function() {
    return {
      enumerable: true,
      configurable: false,

      get(): T {
        const container = getContainer(this);
        const service = container.lookup<T>(serviceClass);
        return service || container.register(serviceClass, new serviceClass(container));
      }
    }
  }
}