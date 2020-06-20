import Component, { hbs } from '@glimmerx/component';
import { on, action } from '@glimmerx/modifier';
import { TodoItem } from './todos';

type TodoArgs = {
  todoItem: TodoItem
  onRemove: (todoItem: TodoItem) => void;
}

export default class Todo extends Component<TodoArgs> {
  static template = hbs`
    <div>
      <input type="checkbox" checked={{@todoItem.done}} {{on "change" this.toggle}} />

      <span>
        {{@todoItem.title}} - {{if @todoItem.done "Done" "Todo"}}
      </span>

      <button type="button" {{on "click" this.removeTodo}}>🗑</button>
    </div>
  `;

  @action
  toggle() {
    this.args.todoItem.done = !this.args.todoItem.done;
  }

  @action
  removeTodo() {
    const confirmed = confirm(`Do you want to remove: ${this.args.todoItem.title}`);
    if (!confirmed) return;

    this.args.onRemove(this.args.todoItem);
  }
}