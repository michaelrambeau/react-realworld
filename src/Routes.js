import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { injectIntl } from "react-intl";

import HomePage from "./pages/HomePage";
import PlayerListPage from "./pages/PlayerList/PlayerListContainer";
import AddPlayerPage from "./pages/AddPlayer/AddPlayerContainer";
import EditPlayerPage from "./pages/EditPlayer/EditPlayerContainer";
import { withProps, compose } from "recompose";

const Routes = ({ dependencies }) => {
  const enhance = compose(withProps({ dependencies }), injectIntl);
  return (
    <Fragment>
      <Route exact path="/" component={enhance(HomePage)} />
      <Route exact path="/players" component={enhance(PlayerListPage)} />
      <Route exact path="/add" component={enhance(AddPlayerPage)} />
      <Route exact path="/players/:id" component={enhance(EditPlayerPage)} />
    </Fragment>
  );
};

export default Routes;
