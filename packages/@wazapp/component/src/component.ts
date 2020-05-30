import { Component as ReactComponent, ReactNode } from 'react';
import { ContainerContext, setContainer, Container } from '@wazapp/core';
import { tracker } from '@wazapp/tracking';
import { yieldChildren } from '@wazapp/helpers';

@tracker
class Component<T = {}> extends ReactComponent<T> {
  #isUnmounting = false;
  #isUnmounted = false;

  get isUnmounting() {
    return this.#isUnmounting;
  }

  get isUnmounted() {
    return this.#isUnmounted;
  }

  constructor(props: T, context: Container) {
    super(props, context);
    setContainer(this, context);
  }

  didMount(): void {}
  didUpdate(_prevProps: any): void {}
  willUnmount(): void {}

  template(): ReactNode | null | undefined {
    return this.yield();
  }

  protected yield(...props: any[]) {
    const { children } = this.props;

    return children ? yieldChildren(this.props.children, ...props) : null;
  }

  // Overrides

  // @ts-ignore
  private componentDidMount() {
    this.didMount();
  }

  // @ts-ignore
  private componentDidUpdate(prevProps: any) {
    this.didUpdate(prevProps);
  }

  // @ts-ignore
  private componentWillUnmount() {
    this.#isUnmounting = true;
    
    this.willUnmount();

    this.#isUnmounting = false;
    this.#isUnmounted = true;
  }

  // @ts-ignore
  private render(): ReactNode {
    return this.template() || null;
  }
}

Object.defineProperty(Component, 'contextType', { value: ContainerContext });

export default Component;

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

// didMount(): void {}
// didUpdate(): void {}
// willUnmount(): void {}
// }