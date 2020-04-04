import { Component } from "react";
import { service, component } from "wazup";
import Todo from './todo';
import TodosService from "demo/services/todos";

@component
export default class TodoList extends Component {
  @service(TodosService) todoService;

  render() {
    return (
      <div>
        <button onClick={this.todoService.add}>Add</button>
        {this.todoService.todos.length} : {this.todoService.done}
        {this.todoService.todos.map((todo, index) => (
          <Todo key={index} todo={todo}>
            {(done) => (
              <span>{done ? "DONE" : "TODO"}</span>
            )}
          </Todo>
        ))}
      </div>
    );
  }
}