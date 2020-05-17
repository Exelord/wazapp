const ContainerSymbol = Symbol('container');

function missingContainer(target: any) {
  throw new Error(`wazaap: You need to extend your component '${target.constructor.name}' with a wazaap 'Component' in order to be able to inject services.`)
}

export class Container {
  private registry = new Map();

  lookup(registration: any) {
    return this.registry.get(registration) || this.register(registration, new registration(this));
  }

  register(registration: any, value: any) {
    this.registry.set(registration, value);
    return value;
  }
}

export function setContainer(target: any, container: Container): void {
  target[ContainerSymbol] = container;
}

export function getContainer(target: any): Container {
  const container = target[ContainerSymbol];

  if (!container || !(container instanceof Container)) missingContainer(target)
  
  return container
}