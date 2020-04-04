import React, { ReactChildren } from 'react';
import { createContext, useMemo } from 'react';
import Service from './service';

export const ContainerContext = createContext({});
export const containerSymbol = Symbol('container');

export class Container {
  registry = new Map();

  lookupService(serviceClass: typeof Service) {
    return this.registry.get(serviceClass) || this.register(serviceClass, new serviceClass(this));
  }

  register(key: any, value: any) {
    this.registry.set(key, value);
    return value;
  }
}

export default function App({ container, children }: { container?: Container, children: ReactChildren }) {
  const appContainer = useMemo(() => container || new Container(), [container]);

  return (
    <ContainerContext.Provider value={appContainer}>
      {children}
    </ContainerContext.Provider>
  )
}