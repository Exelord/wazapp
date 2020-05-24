import Component, { hbs } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';

export type Args = {
  todo: {
    name: string
    done: boolean
  }
}

export default class Todo extends Component<Args> {
  static template = hbs`
    <div {{on "click" this.toggleTodo}}>
      {{this.args.todo.name}} - {{yield this.args.todo.done}}
    </div>
  `;

  @action
  toggleTodo() {
    this.args.todo.done = !this.args.todo.done;
  }
}