import { tracked } from '@glimmerx/component';

class Todo {
  @tracked name: string;
  @tracked done: boolean;

  constructor(name: string, done = false) {
    this.name = name;
    this.done = done;
  }
}

class TodosService {
  @tracked todos: Todo[] = [...new Array(10)].map((n, i) => (new Todo(`Todo${i}`, false)));

  get done() {
    return this.todos.filter(todo => todo.done).length;
  }

  add() {
    this.todos = [...this.todos, ...[...new Array(100)].map((n, i) => (new Todo(`Todo${i}`, false)))]
  }

  reset() {
    this.todos = []
  }
}

export default TodosService