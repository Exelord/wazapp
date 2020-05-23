import Component from "@wazapp/component";
import { yieldChildren } from "@wazapp/helpers";
import { action } from "@wazapp/tracking";

export type Props = {
  todo: {
    name: string
    done: boolean
  }
}

export default class Todo extends Component<Props> {
  template() {
    return (
      <li onClick={this.toggleTodo}>
        {this.props.todo.name} - {yieldChildren(this.props.children, this.props.todo.done)}
      </li>
    );
  }

  @action
  toggleTodo() {
    this.props.todo.done = !this.props.todo.done;
  }
}