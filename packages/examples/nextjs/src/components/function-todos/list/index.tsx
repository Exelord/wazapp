import { FunctionComponent, useLocalStore } from "@wazapp/component";
import { each } from "@wazapp/helpers";
import { TodoItem } from "@src/components/function-todos";
import TodoListItem from "./item";
import { IObservableArray } from "@wazapp/tracking";

type TodoListProps = {
  todoItems: TodoItem[];
}

type LocalStore = {
  removeTodo(todoItem: TodoItem): void;
}

const TodoList: React.FunctionComponent<TodoListProps> = (props) => {
  const store = useLocalStore<LocalStore>(() => ({
    removeTodo(todoItem: TodoItem) {
      (props.todoItems as IObservableArray).remove(todoItem);
    }
  }));

  return (
    <ul>
      {each(props.todoItems, (todoItem) => (
        <li>
          <TodoListItem todoItem={todoItem} onRemove={store.removeTodo} />
        </li>
      ))}
    </ul>
  );
}

export default FunctionComponent(TodoList);