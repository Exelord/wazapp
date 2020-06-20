import { FunctionComponent, useLocalStore } from "@wazapp/component";
import { observe } from "@wazapp/tracking";

import TodoList from "@src/components/function-todos/list";
import CreateForm from "@src/components/function-todos/create-form";

import styles from './styles.module.css';
import { useEffect } from "react";

export type TodoItem = {
  title: string;
  done: boolean;
}

type LocalStore = {
  todoItems: TodoItem[];
  addTodo(todoItem: TodoItem): void;
  addMany(): void;
  clear(): void;
}

const Todos: React.FunctionComponent = () => {
  const store = useLocalStore<LocalStore>(() => ({
    todoItems: [],

    addTodo(todoItem) {
      this.todoItems.push(todoItem);
    },

    addMany() {
      const todos = [ ...Array(10000)].map((v,i) => ({ title: `${i}`, done: false } as TodoItem));
      this.todoItems.push(...todos)
    },

    clear() {
      this.todoItems = []
    }
  }));

  // useEffect(() => {
  //   store.todoItems = JSON.parse(window.localStorage.getItem('todos') || '[]');

  //   return observe(store.todoItems, () => {
  //     window.localStorage.setItem('todos', JSON.stringify(store.todoItems));
  //   })
  // }, [])

  return (
    <div className={styles.todos}>
      Count: {store.todoItems.length}
      <button onClick={store.addMany}>Add 500</button>
      <button onClick={store.clear}>Clear</button>
      <CreateForm onCreate={store.addTodo} />
      <TodoList todoItems={store.todoItems} />
    </div>
  );
}

export default FunctionComponent(Todos);