import Service from "@wazapp/service";
import { tracked } from "@wazapp/tracking";

export default class AuthService extends Service {
  @tracked user: any;

  get isLoggedIn() {
    return !!this.user;
  }

  login(name?: string) {
    this.user = { name }
  }

  logout() {
    this.user = undefined;
  }
}