import { observer } from "mobx-react"
import { Component as ReactComponent } from 'react';
import { ContainerContext } from './container';

export function component(target: typeof ReactComponent) {
  target.contextType = ContainerContext;
  observer(target)
}