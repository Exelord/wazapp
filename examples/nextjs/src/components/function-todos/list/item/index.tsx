import { FunctionComponent, useLocalStore } from "@wazapp/component";
import { classNames } from "@wazapp/helpers";
import { TodoItem } from "@src/components/function-todos";

import styles from './styles.module.scss';

export type TodoListItemProps = {
  todoItem: TodoItem
  onRemove: (todoItem: TodoItem) => void;
}

type LocalStore = {
  toggle(): void;
  removeTodo(): void;
}

const TodoListItem: React.FunctionComponent<TodoListItemProps> = (props) => {
  const store = useLocalStore<LocalStore>(() => ({
    toggle() {
      props.todoItem.done = !props.todoItem.done;
    },
  
    removeTodo() {
      const confirmed = confirm(`Do you want to remove: ${props.todoItem.title}`);
      if (!confirmed) return;
  
      props.onRemove(props.todoItem);
    }
  }));

  return (
    <div>
      <input type="checkbox" checked={props.todoItem.done} onChange={store.toggle} />

      <span className={classNames({ [styles.strikethrough]: props.todoItem.done })}>
        {props.todoItem.title}
      </span>

      <button type="button" onClick={store.removeTodo}>🗑</button>
    </div>
  );
}

export default FunctionComponent(TodoListItem);