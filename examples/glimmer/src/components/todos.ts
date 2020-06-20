import Component, { hbs, tracked } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';

import TodoList from './todo-list';

export type TodoItem = {
  title: string;
  done: boolean;
}

export default class Todo extends Component {
  @tracked todoItems: TodoItem[] = [];

  static template = hbs`
    <div>
      Count: {{this.todoItems.length}}
      <button {{on "click" this.addMany}}>Add 10000</button>
      <button {{on "click" this.clear}}>Clear</button>
      <TodoList @todoItems={{this.todoItems}} />
    </div>
  `;

  @action
  addTodo(todoItem: TodoItem) {
    this.todoItems.push(todoItem);
  }

  @action
  addMany() {
    const todos = [ ...Array(10000)].map((v,i) => ({ title: `${i}`, done: false } as TodoItem));
    this.todoItems = [...this.todoItems, ...todos];
  }

  @action
  clear() {
    this.todoItems = []
  }
}