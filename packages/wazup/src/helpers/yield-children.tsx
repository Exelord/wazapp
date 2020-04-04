import { ReactNode } from 'react';

export default function yieldChildren(children?: ReactNode, ...args: any[]) {
  return (children && typeof children === 'function') ? children(...args) : children;
}