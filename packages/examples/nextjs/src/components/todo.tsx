import Component from "@wazapp/component";
import { trackable } from '@wazapp/tracking';
import { yieldChildren } from "@wazapp/helpers";

export type Props = {
  todo: {
    name: string
    done: boolean
  }
}

@trackable
export default class Todo extends Component<Props> {
  render() {
    return (
      <li onClick={() => (this.props.todo.done = !this.props.todo.done)}>
        {this.props.todo.name} - {yieldChildren(this.props.children, this.props.todo.done)}
      </li>
    );
  }
}