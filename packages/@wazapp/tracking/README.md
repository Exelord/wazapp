# @wazapp/tracking

Wazapp is using [MobX](https://mobx.js.org) for state management. It re-exports its functionality as well as `observer` from [mobx-react](https://mobx-react.js.org/).

**Please Note! For convenience purpose MobX's [`action`](https://mobx.js.org/refguide/action.html#action) has been re-exported as [`action.bound`](https://mobx.js.org/refguide/action.html#bound-actions)**

#### Example of usage

```typescript
import Component from "@wazapp/component";
import { observable, action } from "@wazapp/tracking";

export default class Todos extends Component {
  @observable todoItems: []

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