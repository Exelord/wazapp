# @wazapp/core

The core is the main element of Wazapp application. It delivers `<App />` component which creates app's `Owner`. It use used to keep all your singleton instances, eg. `Services`.

## API

### App

The App component will integrate your app with Wazapp. Make sure to wrap your top level component with it.

Optionally, you can pass your own `Owner` instance to it, using `owner` property.

#### Example

```typescript
import { App as Wazapp } from '@wazapp/core'

const MyApp = () => (
  <Wazapp>
    <IndexPage />
  </Wazapp>
)

export default MyApp;
```

### Owner

The owner serves as a global registry for your application.
It exposes two methods: `lookup` and `register`. Usually, you dont need to worry about them but may become hand if you would like to pre initialize your own service.

Owner is used by `@wazapp/component` to access and lazy instantiate services.

#### Methods

- `register(key: any, value: any)` - register "memorize" any valye you want under whatever key you want
- `lookup(key: any)` - withdraw the "memorized" value for specific key

#### Example

```typescript
class MySingleton {
  constructor(options) {
    this.options = options;
  }
}

owner.register(MySingleton, new MySingleton({ hey: 'wazapp' }));

const mySingletonInstance = owner.lookup(MySingleton);
```