import Todo from './todo';
import TodosService from "@app/services/todos";

import Component from "@wazapp/component";
import { trackable } from '@wazapp/tracking';
import { service } from '@wazapp/service';

@trackable
export default class TodoList extends Component {
  @service(TodosService) todoService!: TodosService;

  render() {
    return (
      <div>
        <button onClick={this.todoService.add}>Add</button>
        {this.todoService.todos.length} : {this.todoService.done}
        {this.todoService.todos.map((todo, index) => (
          <Todo key={index} todo={todo}>
            {(done: boolean) => (
              <span>{done ? "DONE" : "TODO"}</span>
            )}
          </Todo>
        ))}
      </div>
    );
  }
}