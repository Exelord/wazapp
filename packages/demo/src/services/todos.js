import { tracked, Service, action } from "wazup";

class TodosService extends Service {
  @tracked todos = [...new Array(10)].map((n, i) => ({
    name: `Todo${i}`,
    done: false
  }));

  get done() {
    return this.todos.filter(todo => todo.done).length;
  }

  @action
  add() {
    this.todos.push(
      ...[...new Array(100)].map((n, i) => ({
        name: `Todo${i}`,
        done: false
      }))
    );
  }
}

export default TodosService