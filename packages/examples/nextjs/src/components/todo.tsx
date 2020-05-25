import Component from "@wazapp/component";
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
      <div onClick={this.toggleTodo}>
        {this.props.todo.name} - {this.props.todo.done ? "DONE" : "TODO"}
      </div>
    );
  }

  @action
  toggleTodo() {
    this.props.todo.done = !this.props.todo.done;
  }
}