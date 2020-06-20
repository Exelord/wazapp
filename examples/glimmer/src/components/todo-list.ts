import Component, { hbs } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';
import { service } from '@glimmerx/service';

import Todo from './todo';
import TodosService from 'src/services/todos';

export default class TodoList extends Component {
  @service('todos') todosService!: TodosService;

  static template = hbs`
    <div>
      <button {{on "click" this.add}}>Add</button>
      <button {{on "click" this.reset}}>Reset</button>

      {{this.todosService.todos.length}} : {{this.todosService.done}}

      <ul>
        {{#each this.todosService.todos as |todo|}}
          <li>
            <Todo @todo={{todo}} />
          </li>
        {{/each}}
      </ul>
    </div>
  `;

  @action
  add() {
    this.todosService.add();
  }

  @action
  reset() {
    this.todosService.reset();
  }
}