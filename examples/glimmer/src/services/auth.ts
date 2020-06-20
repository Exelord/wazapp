import { tracked } from '@glimmerx/component';
import { action } from '@glimmerx/modifier';

export default class AuthService {
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