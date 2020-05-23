import { observable, action as mobxAction } from "mobx"
import { observer as tracker } from 'mobx-react';

export const action = mobxAction.bound

export {
  tracker,
  observable as tracked
}