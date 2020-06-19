const DISPOSERS = new WeakMap<object, Array<string | Disposer | Disposer[]>>();

export type Disposer = () => void;

export type DisposableObject = object & {
  [key: string]: any;
}

export function runDisposers(target: DisposableObject): void {
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

export function registerDisposer(target: DisposableObject, propertyKeyOrFunction: string | Disposer | Disposer[]): PropertyKey | Disposer | Array<Disposer> | void {
  const disposers = DISPOSERS.get(target) ?? [];

  disposers.push(propertyKeyOrFunction);
  DISPOSERS.set(target, disposers);
}