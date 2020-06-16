import { createContext, useContext } from 'react';
import { Owner } from './owner';

const OwnerContext = createContext(new Owner());

export const useOwner = () => useContext(OwnerContext)
export default OwnerContext;