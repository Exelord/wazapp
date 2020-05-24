import Component from "@wazapp/component";
import { service } from '@wazapp/service';

import TodosService from "@app/services/todos";
import Todo from './todo';
import { each } from "@wazapp/helpers";
import { action } from "@wazapp/tracking";

export default class TodoList extends Component {
  @service(TodosService) todoService!: TodosService;

  template() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.reset}>Reset</button>

        {this.todoService.todos.length} : {this.todoService.done}

        <ul>
          {each(this.todoService.todos, (todo) => (
            <li key={todo.id}>
              <Todo todo={todo}>
                {(done: boolean) => (
                  <span>{done ? "DONE" : "TODO"}</span>
                )}
              </Todo>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  @action
  add() {
    this.todoService.add();
  }

  @action
  reset() {
    this.todoService.reset();
  }
}