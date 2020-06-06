# @wazapp/utils

Utils are a bunch of functionalities that can make your life easier. They are used internally by Wazapp packages, but you are encourage to use them as well.

# API

## guidFor

Returns a unique id for the object. If the object does not yet have a guid, one will be assigned to it. You can call this on any object, string, number, whatever...

You can also use this method on DOM Element objects.

### API

Properties:
- `value`: `any` - value for which the guid will be generated
- `suffix`: `string` - optional suffix

### Example

```typescript
import Component from "@wazapp/component";

export default class FormComponent extends Component {
  template({ name }) {
    return (
      <form>
        <label htmlFor={guidFor(this, 'title')}>Title</label>
        <input id={guidFor(this, 'title')} name="title" />
      </form>
    );
  }
}

// Renders:
// <form>
//   <label for="w:1-w2">Title</label>
//   <input id="w:1-w2" name="title" />
// </form>
```

## uuid

Exposes: https://github.com/ai/nanoid

### Example

```typescript
import { uuid } from '@wazapp/utils'

const newItemId = uuid();
```