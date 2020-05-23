import Component from "@wazapp/component";
import { yieldChildren } from "@wazapp/helpers";

export type Props = {
  todo: {
    name: string
    done: boolean
  }
}

export default class Todo extends Component<Props> {
  template() {
    return (
      <li onClick={() => (this.props.todo.done = !this.props.todo.done)}>
        {this.props.todo.name} - {yieldChildren(this.props.children, this.props.todo.done)}
      </li>
    );
  }
}