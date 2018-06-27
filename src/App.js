// @flow
import React from "react";
import type {AuthAPI} from './api/auth/auth-types'
import type {PlayersAPI} from './api/players/players-types'

import Routes from "./Routes";
import AuthContainer from "./containers/Auth";
import Loading from "./components/Loading";
import "./App.css";

type Props = {
  dependencies: {
    authApi: AuthAPI,
    playersApi: PlayersAPI
  }
}

const App = (props: Props) => {
  const {dependencies} = props
  return (
    <AuthContainer api={dependencies.authApi}>
      {auth => {
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
