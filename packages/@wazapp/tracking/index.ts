import { observable, action as mobxAction } from "mobx"
import { observer as trackable } from 'mobx-react';

export const action = mobxAction.bound

export {
  trackable,
  observable as tracked
}