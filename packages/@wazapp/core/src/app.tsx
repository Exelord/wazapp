import React, { ReactNode } from 'react';
import { createContext, useState } from 'react';
import { Container } from './container';

export const ContainerContext = createContext({});

const App = ({ children }: { children: ReactNode }) => {
  const [appContainer] = useState(new Container());

  return (
    <ContainerContext.Provider value={appContainer}>
      {children}
    </ContainerContext.Provider>
  )
}

export default App;