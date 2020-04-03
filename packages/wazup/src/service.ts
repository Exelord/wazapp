import { Container } from './container';

export default class Service {
  protected context: Container;

  constructor(container: Container) {
    this.context = container;
  }
};

export function service(storeClass: typeof Service) {
  return function(_target: any, _name: string, descriptor: PropertyDescriptor) {
    return {
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable,

      get(): any {
        return ((this as any).context as Container).lookupService(storeClass)
      }
    }
  }
}