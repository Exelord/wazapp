import Component from "@wazapp/component";
import { service } from '@wazapp/service';

import TodosService from "@app/services/todos";
import Todo from './todo';

export default class TodoList extends Component {
  @service(TodosService) todoService!: TodosService;

  template() {
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