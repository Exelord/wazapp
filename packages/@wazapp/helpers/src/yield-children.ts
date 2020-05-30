import { ReactNode } from 'react';

export default function yieldChildren(children?: ReactNode, ...args: any[]): ReactNode {
  if (!children) return null;
  return (typeof children === 'function') ? children(...args) : children;
}