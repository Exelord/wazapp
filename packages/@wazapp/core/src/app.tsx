import React, { ReactNode } from 'react';
import { createContext, useMemo } from 'react';
import { Owner } from './owner';
import { setupGuid } from '@wazapp/utils';

export const OwnerContext = createContext({});

const createOwner = (owner?: Owner) => {
  return owner || new Owner();
}

const Wazapp = ({ owner, children }: { owner?: Owner, children: ReactNode }) => {
  const appOwner = useMemo(() => createOwner(owner), [owner]);
  
  useMemo(setupGuid, []);
  
  return (
    <OwnerContext.Provider value={appOwner}>
      {children}
    </OwnerContext.Provider>
  )
}

export default Wazapp;