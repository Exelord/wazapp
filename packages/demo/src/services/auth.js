import { Store, tracked, action } from "wazup"

export default class AuthService extends Store {
  @tracked user;

  get isLoggedIn() {
    return !!this.user;
  }

  @action
  login(name) {
    this.user = { name }
  }

  @action
  logout() {
    this.user = undefined;
  }
}