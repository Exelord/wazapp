import Component, { hbs } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';

export type TodoArgs = {
  todo: {
    name: string
    done: boolean
  }
}

export default class Todo extends Component<TodoArgs> {
  static template = hbs`
    <div {{on "click" this.toggleTodo}}>
      {{this.args.todo.name}} - {{if this.args.todo.done "DONE" "TODO"}}
    </div>
  `;

  @action
  toggleTodo() {
    this.args.todo.done = !this.args.todo.done;
  }
}