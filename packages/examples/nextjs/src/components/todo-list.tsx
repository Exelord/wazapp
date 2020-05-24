import Component from "@wazapp/component";
import { service } from '@wazapp/service';

import TodosService from "@src/services/todos";
import Todo from './todo';
import { each } from "@wazapp/helpers";
import { action } from "@wazapp/tracking";

export default class TodoList extends Component {
  @service(TodosService) todosService!: TodosService;

  template() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.reset}>Reset</button>

        {this.todosService.todos.length} : {this.todosService.done}

        <ul>
          {each(this.todosService.todos, (todo) => (
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
    this.todosService.add();
  }

  @action
  reset() {
    this.todosService.reset();
  }
}