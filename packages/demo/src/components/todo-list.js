import { Component } from "react";
import { service, component } from "wazup";
import Todo from './todo';
import TodosService from "demo/services/todos";

@component
export default class TodoList extends Component {
  @service(TodosService) todos;

  render() {
    return (
      <div>
        <button onClick={this.todos.add}>Add</button>
        {this.todos.todos.length} : {this.todos.done}
        {this.todos.todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </div>
    );
  }
}