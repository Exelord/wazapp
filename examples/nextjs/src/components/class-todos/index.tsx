import { ClassComponent } from "@wazapp/component";
import { registerDisposer } from '@wazapp/utils';
import { observable, action, observe } from "@wazapp/tracking";

import TodoList from "@src/components/class-todos/list";
import CreateForm from "@src/components/class-todos/create-form";

import styles from './styles.module.css';

export type TodoItem = {
  title: string;
  done: boolean;
}

export default class Todos extends ClassComponent {
  @observable todoItems: TodoItem[] = []

  // didMount() {
  //   super.didMount();

  //   this.todoItems = JSON.parse(window.localStorage.getItem('todos') || '[]');

  //   registerDisposer(this, observe(this.todoItems, () => {
  //     window.localStorage.setItem('todos', JSON.stringify(this.todoItems));
  //   }));
  // }

  template({}, { addTodo, todoItems }: this) {
    return (
      <div className={styles.todos}>
        Count: {this.todoItems.length}
        <button onClick={this.addMany}>Add 500</button>
        <button onClick={this.clear}>Clear</button>
        <CreateForm onCreate={addTodo} />
        <TodoList todoItems={todoItems} />
      </div>
    );
  }

  @action
  addTodo(todoItem: TodoItem) {
    this.todoItems.push(todoItem);
  }

  @action
  addMany() {
    const todos = [ ...Array(10000)].map((v,i) => ({ title: `${i}`, done: false } as TodoItem));
    this.todoItems.push(...todos)
  }

  @action
  clear() {
    this.todoItems = []
  }
}