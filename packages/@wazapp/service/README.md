# @wazapp/service

A Service is an object that lives for the duration of the application, and can be made available in different parts of your application.

Services are useful for features that require shared state or persistent connections. Example uses of services might include:

- User/session authentication.
- Geolocation.
- WebSockets.
- Server-sent events or notifications.
- Server-backed API calls that may not fit Ember Data.
- Third-party APIs.
- Logging.

# API

## Service class

The base class of the service.

#### Example

```typescript
import Service from '@wazapp/service';


export default class AuthService extends Service {
  login() {
    // Login user
  }
}
```

## @service decorator

To use services in other services or Wazapp component you can use `@service` decorator.

Services are lazy loaded, so they are not instantiated until the first call.

#### Example

```typescript
import Service from '@wazapp/service';
import MyService from './my-service';

export default class AuthService extends Service {
  @service(MyService) superService!: MyService;
}
```
