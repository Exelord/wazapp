import Component, { hbs } from '@glimmerx/component';
import TodoList from './components/todo-list';

export default class AppComponent extends Component {
  static template = hbs`
    <TodoList />
  `;
}