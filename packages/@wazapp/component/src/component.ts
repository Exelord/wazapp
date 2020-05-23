import { Component as ReactComponent, ReactNode } from 'react';
import { ContainerContext, setContainer, Container } from '@wazapp/core';
import { tracker } from '@wazapp/tracking';

@tracker
export default class Component<T = {}> extends ReactComponent<T> {
  static contextType = ContainerContext

  constructor(props: T, context: Container) {
    super(props, context);
    setContainer(this, context);
  }

  template(): ReactNode {
    return null;
  }

  render() {
    return this.template() || null;
  }
}

// ? API OF THE FUTURE
// export class WazappComponent<T = {}> {
//   props: T;

//   constructor(props: T, context: Container) {
//     setContainer(this, context);
//     this.props = props;
//   }

//   template(): ReactNode {
//     return null;
//   }

//   didMount(): void {}
//   didUpdate(): void {}
//   willUnmount(): void {}
// }