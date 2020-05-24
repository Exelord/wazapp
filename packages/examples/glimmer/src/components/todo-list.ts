import Component, { hbs } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';
import { service } from '@glimmerx/service';

import Todo from './todo';
import TodosService from 'src/services/todos';

export default class TodoList extends Component {
  @service('todos') todoService!: TodosService;

  static template = hbs`
    <div>
      <button {{on "click" this.add}}>Add</button>
      <button {{on "click" this.reset}}>Reset</button>

      {{this.todoService.todos.length}} : {{this.todoService.done}}

      <ul>
        {{#each this.todoService.todos as |todo|}}
          <li>
            <Todo @todo={{todo}} as |done|>
              <span>{{if done "DONE" "TODO"}}</span>
            </Todo>
          </li>
        {{/each}}
      </ul>
    </div>
  `;

  @action
  add() {
    this.todoService.add();
  }

  @action
  reset() {
    this.todoService.reset();
  }
}