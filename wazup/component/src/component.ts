import { Component as ReactComponent, ReactPropTypes } from 'react';
import { ContainerContext, setContainer, Container } from '@wazup/core';

export default class Component<T = ReactPropTypes> extends ReactComponent<T> {
  static contextType = ContainerContext

  constructor(props: T, context: Container) {
    super(props, context);
    setContainer(this, context);
  }
}