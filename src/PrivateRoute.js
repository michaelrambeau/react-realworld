import React from "react";
import {
  // BrowserRouter as Router,
  Route
  // Link,
  // Redirect,
  // withRouter
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Loading from "./components/Loading";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.pending) return <Loading />;
        return auth.isAuthenticated ? (
          <Component {...props} auth={auth} />
        ) : (
          // <Redirect
          //   to={{
          //     pathname: '/login',
          //     state: { from: props.location },
          //   }}
          // />
          <LoginPage {...props} intl={rest.intl} auth={auth} />
        );
      }}
    />
  );
};

export default PrivateRoute;
