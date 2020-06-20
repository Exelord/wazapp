import { ClassComponent } from "@wazapp/component";
import { each } from "@wazapp/helpers";
import { TodoItem } from "@src/components/class-todos";
import TodoListItem from "./item";
import { action, IObservableArray } from "@wazapp/tracking";

type TodoListProps = {
  todoItems: TodoItem[];
}

export default class TodoList extends ClassComponent<TodoListProps> {
  template({ todoItems }: TodoListProps, { removeTodo }: this) {
    return (
      <ul>
        {each(todoItems, (todoItem) => (
          <li>
            <TodoListItem todoItem={todoItem} onRemove={removeTodo} />
          </li>
        ))}
      </ul>
    );
  }

  @action
  removeTodo(todoItem: TodoItem) {
    const todoItems = this.props.todoItems as IObservableArray<TodoItem>;
    todoItems.remove(todoItem);
  }
}