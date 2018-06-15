import React from "react";

import Routes from "./Routes";
import AuthContainer from "./containers/Auth";
import Loading from "./components/Loading";
import "./App.css";

const App = ({ dependencies }) => {
  return (
    <AuthContainer api={dependencies.authApi}>
      {({ auth }) => {
        return auth.pending ? (
          <Loading />
        ) : (
          <Routes dependencies={dependencies} auth={auth} />
        );
      }}
    </AuthContainer>
  );
};

export default App;
