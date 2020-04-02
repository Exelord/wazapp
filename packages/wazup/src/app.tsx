import React, { ReactChildren } from 'react';
import { createContext, useMemo } from 'react';
import Store from './store';

export const ContainerContext = createContext({});

export default function App({ container, children }: { container?: Container, children: ReactChildren }) {
  const appContainer = useMemo(() => container || new Container(), [container]);

  return (
    <ContainerContext.Provider value={appContainer}>
      {children}
    </ContainerContext.Provider>
  )
}

export class Container {
  registry = new Map();

  lookup(storeClass: typeof Store) {
    return this.registry.get(storeClass) || this.register(storeClass);
  }

  register(storeClass: typeof Store) {
    const store = new storeClass(this);
    this.registry.set(storeClass, store);
    return store;
  }
}

export function inject(storeClass: typeof Store) {
  return function(_target: any, _name: string, descriptor: PropertyDescriptor) {
    return {
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable,

      get(): any {
        return ((this as any).context as Container).lookup(storeClass)
      }
    }
  }
}