import Service from "@wazapp/service";
import { tracked, action } from "@wazapp/tracking";

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