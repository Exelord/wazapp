import { Component as ReactComponent } from 'react';
import { ContainerContext } from './app';
import { autoTracking } from './tracking';

export default class Component extends ReactComponent {
  static contextType = ContainerContext

  constructor(props: {}, context?: any) {
    super(props, context)
    autoTracking(this.constructor as any)
  }
};