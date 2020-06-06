# @wazapp/helpers

Helpers are utils that are meant to be used mostly in component templates.

## API

### each(collection, onItem, onEmpty)

`each` will make your iterations in template a breeze. It takes care of unique keys for each element, as well as simplify the syntax.

It takes 3 arguments:
- `collection` - an array of something
- `onItem(item, index)` - callback which will be used for each item in the collection
- `onEmpty` - `optional` - `ReactNode` that will be returned in case the collection is empty. 

#### Example

##### Before

```typescript
import Component from "@wazapp/component";
import { each } from '@wazapp/helpers'

export default class MyComponent extends Component {
  phrases = ['Maciej', 'was', 'here'];

  template({ name }) {
    return (
      <ul>
        {this.phrases.map((phrase) => (
          <li key={phrase}>
            {phrase}
          </li>
        ))}
      </ul>
    );
  }
}
```

##### After

```typescript
import Component from "@wazapp/component";
import { each } from '@wazapp/helpers'

export default class MyComponent extends Component {
  phrases = ['Maciej', 'was', 'here'];

  template({ name }) {
    return (
      <ul>
        {each(this.phrases, (phrase) => (
          <li>
            {phrase}
          </li>
        ))}
      </ul>
    );
  }
}
```

### when(condition, ifTrue, ifFalse)

`when` is simple `if` statement which does not require to return `null` as false case.

It takes 3 arguments:
- `condition`
- `ifTrue` - value when true
- `ifFalse` - value when false

#### Example

##### Before

```typescript
import Component from "@wazapp/component";
import { when } from '@wazapp/helpers'

export default class MyComponent extends Component {
  template({ name }) {
    return (
      <div>
        {name === 'Maciej' ? (
          <h1>Hi Maciej</h1>
        ) : null}
      </div>
    );
  }
}
```

##### After

```typescript
import Component from "@wazapp/component";
import { when } from '@wazapp/helpers'

export default class MyComponent extends Component {
  template({ name }) {
    return (
      <div>
        {when(name === 'Maciej', (
          <h1>Hi Maciej</h1>)
        )}
      </div>
    );
  }
}
```

### classNames()

Exposes: https://github.com/JedWatson/classnames

### yieldChildren(children, ...args)

`yieldChildren` allows you to return component's `children` or in case the `children` is a function, it will allow you to call it with custom arguments.

Arguments:
- `children`: `ReactNode | Function`
- `...args`: `any[]` - your custom arguments that will be used on `children` call (if `children` is a function)
