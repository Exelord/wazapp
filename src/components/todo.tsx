import Component, { tracking } from "@wazaap/component";
import { yieldChildren } from "@wazaap/helpers";

export type Props = {
  todo: {
    name: string
    done: boolean
  }
}

@tracking
export default class Todo extends Component<Props> {
  render() {
    return (
      <li onClick={() => (this.props.todo.done = !this.props.todo.done)}>
        {this.props.todo.name} - {yieldChildren(this.props.children, this.props.todo.done)}
      </li>
    );
  }
}