import React, { ReactNode } from 'react';
import { createContext, useMemo } from 'react';
import { Container } from './container';
import { setupGuid } from '@wazapp/utils';

export const ContainerContext = createContext({});

const createContainer = (container?: Container) => {
  return container || new Container();
}

const Wazapp = ({ container, children }: { container?: Container, children: ReactNode }) => {
  const appContainer = useMemo(() => createContainer(container), [container]);
  useMemo(setupGuid, []);
  
  return (
    <ContainerContext.Provider value={appContainer}>
      {children}
    </ContainerContext.Provider>
  )
}

export default Wazapp;