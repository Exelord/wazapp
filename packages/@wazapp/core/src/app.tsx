import React from 'react';
import { createContext, useMemo } from 'react';
import { Container } from './container';

export const ContainerContext = createContext({});

const App = ({ container, children }: { container?: Container, children: any }) => {
  const appContainer = useMemo(() => container || new Container(), [container]);

  return (
    <ContainerContext.Provider value={appContainer}>
      {children}
    </ContainerContext.Provider>
  )
}

export default App;