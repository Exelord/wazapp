import React, { ReactNode } from 'react';
import { createContext, useMemo } from 'react';
import { Container } from './container';
import { setupGuid } from '@wazapp/utils';

export const ContainerContext = createContext({});

const Wazapp = ({ container, children }: { container?: Container, children: ReactNode }) => {
  const appContainer = useMemo(() => container || new Container(), [container]);

  useMemo(setupGuid, []);

  return (
    <ContainerContext.Provider value={appContainer}>
      {children}
    </ContainerContext.Provider>
  )
}

export default Wazapp;