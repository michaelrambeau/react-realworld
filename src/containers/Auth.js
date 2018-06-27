// @flow
import { Component } from "react";
import { withRouter } from "react-router-dom";
import type { User, AuthAPI, LoginForm } from "../api/auth/auth-types";

type Props = {
  api: AuthAPI,
  children: (values: {
    pending: boolean,
    isAuthenticated: boolean,
    failure: boolean,
    user: ?User,
    login: (LoginForm) => Promise<void>,
    logout: () => Promise<void>
  }) => void
};
type State = {
  pending: boolean,
  isAuthenticated: boolean,
  failure: boolean,
  user: ?User
};

/**
 * Top level container to manage authentication side effects.
 * `Render prop` pattern: this container calls its child function,
 * passing down an `auth` object
 */
class AuthContainer extends Component<Props, State> {
  api = this.props.api;
  state = {
    pending: true,
    isAuthenticated: false,
    failure: false,
    user: null
  };
  logout = async () => {
    this.setState(state => ({ ...state, pending: true }));
    await this.api.logout();
    this.logoutSuccess();
  };
  logoutSuccess = () => {
    this.setState(state => ({ isAuthenticated: false, pending: false }));
  };
  login = async formValues => {
    this.setState(state => ({ ...state, pending: true }));
    const { user } = await this.api.login(formValues);
    return user ? this.loginSuccess(user) : this.loginFailure();
  };
  loginSuccess = user => {
    this.setState({ isAuthenticated: true, pending: false, user });
  };
  loginFailure = () => {
    this.setState({ failure: true, pending: false });
  };
  async componentDidMount() {
    this.setState({ pending: true });
    const { user, isAuthenticated } = await this.api.checkIsAuthenticated();
    this.setState({ pending: false, user, isAuthenticated });
  }
  render() {
    const auth = {
      ...this.state,
      logout: this.logout,
      login: this.login
    };
    return this.props.children(auth);
  }
}

export default withRouter(AuthContainer);
