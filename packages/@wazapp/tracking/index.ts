import { observable, action as mobxAction } from "mobx"
import { observer as tracking } from 'mobx-react';

export const action = mobxAction.bound

export {
  tracking,
  observable as tracked
}