import React, { ReactNode } from 'react';
import { createContext, useMemo } from 'react';
import { Container } from './container';

export const ContainerContext = createContext({});

const Wazapp = ({ container, children }: { container?: Container, children: ReactNode }) => {
  const appContainer = useMemo(() => container || new Container(), [container]);

  return (
    <ContainerContext.Provider value={appContainer}>
      {children}
    </ContainerContext.Provider>
  )
}

export default Wazapp;