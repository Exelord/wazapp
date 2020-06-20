import 'mobx-react/batchingForReactDom';

import { PureComponent, ReactNode } from 'react';
import { observer, useStaticRendering } from 'mobx-react';
import { OwnerContext, setOwner, Owner } from '@wazapp/core';
import { yieldChildren } from '@wazapp/helpers';
import { runDisposers } from '@wazapp/utils';

if (typeof window === 'undefined') {
  useStaticRendering(true);
};

@observer
class Component<P = {}> extends PureComponent<P> {
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

  template(_props: P, _self: this): ReactNode | void {
    return this.yield();
  }

  protected yield(...props: any[]): ReactNode {
    return yieldChildren(this.props.children, ...props);
  }

  // React Overrides - DO NOT USE

  render(): ReactNode {
    return this.template(this.props, this) || null;
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
    runDisposers(this);

    this.#isUnmounted = true;
    this.#isUnmounting = false;
  }
}

Object.defineProperty(Component, 'contextType', { value: OwnerContext });

export default Component;
