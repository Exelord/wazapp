import { Component as ReactComponent, ReactNode } from 'react';
import { ContainerContext, setContainer, Container } from '@wazapp/core';
import { tracker } from '@wazapp/tracking';
import { yieldChildren } from '@wazapp/helpers';

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

  yield(...props: any[]) {
    return yieldChildren(this.props.children, ...props)
  }

  render(): ReactNode {
    return this.template() || null;
  }
}

// ? API OF THE FUTURE?
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