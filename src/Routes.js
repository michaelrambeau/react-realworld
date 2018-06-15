import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { injectIntl } from "react-intl";

import HomePage from "./pages/HomePage";
import PlayerListPage from "./pages/PlayerList/PlayerListContainer";
import AddPlayerPage from "./pages/AddPlayer/AddPlayerContainer";
import EditPlayerPage from "./pages/EditPlayer/EditPlayerContainer";
import { withProps, compose } from "recompose";
import PrivateRoute from "./PrivateRoute";

// <Redirect exact from="/" to="/en/" />

const Routes = props => {
  const { auth } = props;
  const enhance = compose(withProps({ ...props }));
  return (
    <Switch>
      <Route exact path="/:language/" component={enhance(HomePage)} />
      <Route
        exact
        path="/:language/players"
        component={enhance(PlayerListPage)}
      />
      <PrivateRoute
        exact
        path="/:language/add"
        component={enhance(AddPlayerPage)}
        auth={auth}
      />
      <PrivateRoute
        exact
        path="/:language/players/:id"
        component={enhance(EditPlayerPage)}
        auth={auth}
      />
      <Redirect exact from="/" to="/en/" />
    </Switch>
  );
};

export default Routes;
