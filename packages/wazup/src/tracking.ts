import { observer } from "mobx-react"
import { observable, action as mobxAction } from "mobx"

export const action = mobxAction.bound

export {
  observer as autoTracking,
  observable as tracked
}
