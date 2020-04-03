import { Service, tracked, action } from "wazup"

export default class AuthService extends Service {
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