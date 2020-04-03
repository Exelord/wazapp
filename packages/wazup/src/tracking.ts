import { observable, action as mobxAction } from "mobx"

export const action = mobxAction.bound

export {
  observable as tracked
}
