import { observable, action as mobxAction } from "mobx"
import { observer as tracker, Observer as Tracker } from 'mobx-react';

export const action = mobxAction.bound

export {
  tracker,
  Tracker,
  observable as tracked
}