import Component, { hbs } from '@glimmerx/component';
import { action } from '@glimmerx/modifier';

import Todo from './todo';
import { TodoItem } from './todos';

type TodoListArgs = {
  todoItems: TodoItem[];
}

export default class TodoList extends Component<TodoListArgs> {
  static template = hbs`
    <ul>
      {{#each @todoItems as |todo|}}
        <li>
          <Todo @todoItem={{todo}} @onRemove={{this.removeTodo}} />
        </li>
      {{/each}}
    </ul>
  `;

  @action
  removeTodo(todoItem: TodoItem) {
    this.args.todoItems.remove(todoItem);
  }
}