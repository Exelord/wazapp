import { ClassComponent } from "@wazapp/component";
import { action } from "@wazapp/tracking";
import { classNames } from "@wazapp/helpers";
import { TodoItem } from "@src/components/class-todos";

import styles from './styles.module.scss';

type TodoListItemProps = {
  todoItem: TodoItem
  onRemove: (todoItem: TodoItem) => void;
}

export default class TodoListItem extends ClassComponent<TodoListItemProps> {
  template({ todoItem }: TodoListItemProps, { toggle, removeTodo }: this) {
    return (
      <div>
        <input type="checkbox" checked={todoItem.done} onChange={toggle} />

        <span className={classNames({ [styles.strikethrough]: todoItem.done })}>
          {todoItem.title}
        </span>

        <button type="button" onClick={removeTodo}>🗑</button>
      </div>
    );
  }

  @action
  toggle() {
    this.props.todoItem.done = !this.props.todoItem.done;
  }

  @action
  removeTodo() {
    const confirmed = confirm(`Do you want to remove: ${this.props.todoItem.title}`);
    if (!confirmed) return;

    this.props.onRemove(this.props.todoItem);
  }
}