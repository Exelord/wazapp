import { tracker } from './tracking';
import { ContainerContext, containerSymbol } from './container';
import { Component as ReactComponent } from 'react';

export function component(target: typeof ReactComponent) {
  target.contextType = ContainerContext;

  Object.defineProperty(target.prototype, containerSymbol, {
    get() {
      return this.context;
    }
  });

  tracker(target)
}