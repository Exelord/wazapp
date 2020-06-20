import Component, { hbs } from '@glimmerx/component';
import Todos from './components/todos';

export default class AppComponent extends Component {
  static template = hbs`
    <Todos />
  `;
}