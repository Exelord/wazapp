import Component from "@wazup/component";
import { autoTracking } from "@wazup/tracking";
import { yieldChildren } from "@wazup/helpers";

export type Props = {
  todo: {
    name: string
    done: boolean
  }
}

@autoTracking
export default class Todo extends Component<Props> {
  render() {
    return (
      <li onClick={() => (this.props.todo.done = !this.props.todo.done)}>
        {this.props.todo.name} - {yieldChildren(this.props.children, this.props.todo.done)}
      </li>
    );
  }
}