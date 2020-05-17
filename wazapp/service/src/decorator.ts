import Service from "./service";
import { getContainer } from "@wazaap/core";

export function service(serviceClass?: typeof Service): PropertyDecorator {
  return function() {
    return {
      enumerable: true,
      configurable: false,

      get(): Service {
        return getContainer(this).lookup(serviceClass);
      }
    }
  }
}