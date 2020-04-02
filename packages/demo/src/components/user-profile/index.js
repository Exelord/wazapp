import { Component, inject, tracked, action } from 'wazup';
import AuthService from 'demo/services/auth';

class UserProfile extends Component {
  @inject(AuthService) auth;

  @tracked name;

  render() {
    return (
      <div>
        <h1>Hello {this.auth.user?.name ?? this.name}</h1>

        {this.auth.isLoggedIn ?
          <button onClick={this.auth.logout}>Logout</button>
        :
          (
            <form onSubmit={this.login}>
              <input type="text" name="name" onInput={(event) => this.name = event.target.value} required />
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