import Component, { tracking } from "@wazup/component";
import { tracked, action } from "@wazup/tracking";
import { service } from '@wazup/service';

import AuthService from '@app/services/auth';

@tracking
class UserProfile extends Component {
  @service(AuthService) auth!: AuthService;

  @tracked name?: string;

  render() {
    return (
      <div>
        <h1>Hello {this.auth.user?.name ?? this.name}</h1>

        {this.auth.isLoggedIn ?
          <button onClick={this.auth.logout}>Logout</button>
        :
          (
            <form onSubmit={this.login}>
              <input type="text" name="name" onInput={(event) => this.name = (event.target as HTMLInputElement).value} required />
              <button type="submit">Login</button>
            </form>
          )
        }
      </div>
    );
  }

  @action
  login() {
    this.auth.login(this.name)
    this.name = undefined;
  }
}

export default UserProfile;