import { component } from "wazup";
import { Component } from "react";

@component
export default class Todo extends Component {
  render() {
    return (
      <li onClick={() => (this.props.todo.done = !this.props.todo.done)}>
        {this.props.todo.name} - {this.props.todo.done ? "YES" : "NO"}
      </li>
    );
  }
}