import Service from "@wazapp/service";
import { tracked } from "@wazapp/tracking";

export type Todo = {
  id: number;
  name: string;
  done: boolean;
}

class TodosService extends Service {
  @tracked todos: Todo[] = [...new Array(10)].map((n, i) => ({
    id: i,
    name: `Todo${i}`,
    done: false
  }));

  get done() {
    return this.todos.filter(todo => todo.done).length;
  }

  add() {
    this.todos.push(
      ...[...new Array(100)].map((n, i) => ({
        id: this.todos.length + 1 + i,
        name: `Todo${this.todos.length + 1 + i}`,
        done: false
      }))
    );
  }

  reset() {
    this.todos = []
  }
}

export default TodosService;