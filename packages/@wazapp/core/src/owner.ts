const ownerMap = new WeakMap();

function missingOwner(target: any) {
  throw new Error(`wazapp: You need to extend your component '${target.constructor.name}'\
                   with a wazapp 'Component' and make sure your app in wrapped with wazapp\
                   App in order to be able to inject services.`)
}

export class Owner {
  private registry = new Map();

  lookup<T>(key: any): T | undefined {
    return this.registry.get(key);
  }

  register<T>(key: any, value: T): T {
    this.registry.set(key, value);
    return value;
  }
}

export function getOwner(target: object): Owner {
  const owner = ownerMap.get(target);

  return owner || missingOwner(target);
}

export function setOwner(target: object, owner: Owner): void {
  ownerMap.set(target, owner);
}