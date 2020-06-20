import React, { ReactNode, useMemo } from 'react';
import OwnerContext from './context';
import { Owner } from './owner';
import { resetGuid } from '@wazapp/utils';

const createOwner = (owner?: Owner) => {
  return owner || new Owner();
}

const Wazapp = ({ owner, children }: { owner?: Owner, children: ReactNode }) => {
  const appOwner = useMemo(() => createOwner(owner), [owner]);
  
  useMemo(resetGuid, []);
  
  return (
    <OwnerContext.Provider value={appOwner}>
      {children}
    </OwnerContext.Provider>
  )
}

export default Wazapp;