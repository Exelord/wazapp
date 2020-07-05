import { FunctionComponent } from "@wazapp/component";
import { each } from "@wazapp/helpers";
import { TodoItem } from "@src/components/function-todos";
import TodoListItem from "./item";

type TodoListProps = {
  todoItems: TodoItem[];
  onRemove: (todoItem: TodoItem) => void;
}

const TodoList: React.FunctionComponent<TodoListProps> = (props) => {
  return (
    <ul>
      {each(props.todoItems, (todoItem) => (
        <li>
          <TodoListItem todoItem={todoItem} onRemove={props.onRemove} />
        </li>
      ))}
    </ul>
  );
}

export default FunctionComponent(TodoList);