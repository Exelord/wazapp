const DISPOSERS = new WeakMap<object, Array<PropertyKey | Disposer | Disposer[]>>();

export type Disposer = () => void;

export function runDisposers(target: any): void {
  (DISPOSERS.get(target) || []).forEach(propKeyOrFunction => {
    const prop = typeof propKeyOrFunction === 'string' ? target[propKeyOrFunction] : propKeyOrFunction;
    
    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) {
        prop.map(f => f());
      } else {
        prop();
      }
    }
  });
}

export function registerDisposer(target: any, propertyKeyOrFunction: PropertyKey | Disposer | Disposer[]): PropertyKey | Disposer | Array<Disposer> | void {
  const disposers = DISPOSERS.get(target) ?? [];

  disposers.push(propertyKeyOrFunction);
  DISPOSERS.set(target, disposers);
}