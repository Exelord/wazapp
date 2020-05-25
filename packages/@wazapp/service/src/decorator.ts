import Service from "./service";
import { getContainer } from "@wazapp/core";

export function service(serviceClass: typeof Service): PropertyDecorator {
  return function() {
    return {
      enumerable: true,
      configurable: false,

      get(): Service {
        const container = getContainer(this);
        const service = container.lookup(serviceClass);
        return service || container.register(serviceClass, new serviceClass(container));
      }
    }
  }
}