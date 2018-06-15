import { Component } from "react";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";

/**
 * Top level container to manage authentication side effects.
 * `Render prop` pattern: this container calls its child function,
 * passing down an `auth` object
 */
class AuthContainer extends Component {
  api = this.props.api;
  defaultValues = this.api.defaultValues;
  state = {
    pending: true,
    isAuthenticated: false,
    ...this.defaultValues
  };
  logout = async () => {
    this.setState(state => ({ ...state, pending: true }));
    await this.api.logout();
    this.logoutSuccess();
  };
  logoutSuccess = () => {
    this.setState({ isAuthenticated: false, pending: false });
  };
  login = async () => {
    this.setState(state => ({ ...state, pending: true }));
    await this.api.login();
    this.loginSuccess();
  };
  loginSuccess = () => {
    this.setState({ isAuthenticated: true, pending: false });
  };
  async componentDidMount() {
    this.setState({ pending: true });
    const isAuthenticated = await this.api.checkIsAuthenticated();
    this.setState({ pending: false, isAuthenticated });
  }
  render() {
    const auth = {
      ...this.state,
      logout: this.logout,
      login: this.login
    };
    return this.props.children({ auth });
  }
}

export default withRouter(AuthContainer);
