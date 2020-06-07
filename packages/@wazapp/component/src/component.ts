import { Component as ReactComponent, ReactNode } from 'react';
import { OwnerContext, setOwner, Owner } from '@wazapp/core';
import { observer } from '@wazapp/tracking';
import { yieldChildren } from '@wazapp/helpers';

@observer
class Component<P = {}> extends ReactComponent<P> {
  #isUnmounting = false;
  #isUnmounted = false;

  get isUnmounting(): boolean {
    return this.#isUnmounting;
  }

  get isUnmounted(): boolean {
    return this.#isUnmounted;
  }

  constructor(props: P, owner: Owner) {
    super(props, owner);
    setOwner(this, owner);
  }

  didMount(): void {}
  didUpdate(_prevProps: any): void {}
  willUnmount(): void {}

  template(_props: P): ReactNode | void {
    return this.yield();
  }

  protected yield(...props: any[]): ReactNode {
    return yieldChildren(this.props.children, ...props);
  }

  // React Overrides - DO NOT USE

  render(): ReactNode {
    return this.template(this.props) || null;
  }

  componentDidMount(): void {
    this.didMount();
  }

  componentDidUpdate(prevProps: P): void {
    this.didUpdate(prevProps);
  }

  componentWillUnmount(): void {
    this.#isUnmounting = true;
    
    this.willUnmount();

    this.#isUnmounting = false;
    this.#isUnmounted = true;
  }
}

Object.defineProperty(Component, 'contextType', { value: OwnerContext });

export default Component;
