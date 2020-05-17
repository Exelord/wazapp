import { Component as ReactComponent } from 'react';
import { ContainerContext, setContainer, Container } from '@wazapp/core';

export default class Component<T = {}> extends ReactComponent<T> {
  static contextType = ContainerContext

  constructor(props: T, context: Container) {
    super(props, context);
    setContainer(this, context);
  }
}