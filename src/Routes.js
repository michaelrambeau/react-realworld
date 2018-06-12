import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PlayerListPage from "./pages/PlayerList/PlayerListContainer";
import AddPlayerPage from "./pages/AddPlayerPage";
import EditPlayerPage from "./pages/EditPlayer/EditPlayerContainer";
import { withProps } from "recompose";

const Routes = ({ dependencies }) => {
  const enhance = withProps({ dependencies });
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/players" component={enhance(PlayerListPage)} />
      <Route exact path="/add" component={enhance(AddPlayerPage)} />
      <Route exact path="/players/:id" component={enhance(EditPlayerPage)} />
    </Fragment>
  );
};

export default Routes;
