import { observable, action as mobxAction } from "mobx"
import { observer } from 'mobx-react';

export const action = mobxAction.bound

export {
  observer as autoTracking,
  observable as tracked
}
