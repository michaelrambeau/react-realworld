import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { injectIntl } from "react-intl";

import HomePage from "./pages/HomePage";
import PlayerListPage from "./pages/PlayerList/PlayerListContainer";
import AddPlayerPage from "./pages/AddPlayer/AddPlayerContainer";
import EditPlayerPage from "./pages/EditPlayer/EditPlayerContainer";
import { withProps, compose } from "recompose";

// <Redirect exact from="/" to="/en/" />

const Routes = ({ dependencies }) => {
  const enhance = compose(withProps({ dependencies }));
  return (
    <Switch>
      <Route exact path="/:language/" component={enhance(HomePage)} />
      <Route
        exact
        path="/:language/players"
        component={enhance(PlayerListPage)}
      />
      <Route exact path="/:language/add" component={enhance(AddPlayerPage)} />
      <Route
        exact
        path="/:language/players/:id"
        component={enhance(EditPlayerPage)}
      />
      <Redirect exact from="/" to="/ja/" />
    </Switch>
  );
};

export default Routes;
