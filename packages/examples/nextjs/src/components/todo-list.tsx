import Component from "@wazapp/component";
import { action } from "@wazapp/tracking";
import { service } from '@wazapp/service';
import { each } from "@wazapp/helpers";

import Todo from './todo';
import TodosService from "@src/services/todos";

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
              <Todo todo={todo} />
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