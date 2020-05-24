const containerMap = new WeakMap();

function missingContainer(target: any) {
  throw new Error(`wazapp: You need to extend your component '${target.constructor.name}'\
                   with a wazapp 'Component' and make sure your app in wrapped with wazapp\
                   App in order to be able to inject services.`)
}

export class Container {
  private registry = new Map();

  lookup(registration: any) {
    return this.registry.get(registration) || this.register(registration, new registration(this));
  }

  private register(registration: any, value: any) {
    this.registry.set(registration, value);
    return value;
  }
}

export function getContainer(target: any): Container {
  const container = containerMap.get(target);

  return container || missingContainer(target);
}

export function setContainer(target: any, container: Container): void {
  containerMap.set(target, container);
}