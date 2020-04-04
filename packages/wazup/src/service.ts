import { Container, containerSymbol } from './container';

function missingContainer(target: any) {
  throw new Error(`Wazup: You need to wrap '${target.constructor.name}' with a 'component' or 'tracker' decorator in order to be able to inject services.`)
}

export default class Service {
  protected [containerSymbol]: Container;

  constructor(container: Container) {
    this[containerSymbol] = container;
  }
};

export function service(storeClass: typeof Service) {
  return function(target: any, _name: string, descriptor: PropertyDescriptor) {
    return {
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable,

      get(): any {
        const container = ((this as any)[containerSymbol] as Container);
        if (!container) return missingContainer(target);
        return container.lookupService(storeClass)
      }
    }
  }
}