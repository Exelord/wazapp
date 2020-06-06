# @wazapp/tracking

Wazapp is using [Mobx](https://mobx.js.org) for state management. It expose some of it's functionality under Wazapp's abstraction.

Currently available:
- `action` - https://mobx.js.org/refguide/action.html#bound-actions
- `tracked` - https://mobx.js.org/refguide/observable.html
- `tracker` - https://mobx.js.org/refguide/observer-component.html

In most cases you will be only in touch with `action` and `tracked` as all Wazapp Component are automatically using `tracker`.

The `action` will make sure that the function it's used on has been bind to current context.
The `tracked` will make the property observed. Whenever it will change the component will rerender.

#### Example of usage

```typescript
import Component from "@wazapp/component";
import { tracked, action } from "@wazapp/tracking";

export default class Todos extends Component {
  @tracked todoItems: []

  template() {
    return (
      <div>
        <CreateForm onCreate={this.addTodo} />
        <TodoList todoItems={this.todoItems} />
      </div>
    );
  }

  @action
  addTodo(todoItem) {
    this.todoItems.push(todoItem);
  }
}
```