import Service from "@wazup/service";
import { tracked, action } from "@wazup/tracking";

export default class AuthService extends Service {
  @tracked user: any;

  get isLoggedIn() {
    return !!this.user;
  }

  @action
  login(name?: string) {
    this.user = { name }
  }

  @action
  logout() {
    this.user = undefined;
  }
}