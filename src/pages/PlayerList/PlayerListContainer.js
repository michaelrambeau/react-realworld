import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withProps } from "recompose";

import FetchPlayers from "../../containers/FetchPlayers";
import PlayerListPage from "./PlayerListPage";

const PlayerListContainer = ({ dependencies, match }) => {
  const { api } = dependencies;
  const { language } = match.params;
  const locale = language || "en";
  return (
    <FetchPlayers api={api}>
      {withProps({ locale })(PlayerListPage)}
    </FetchPlayers>
  );
};

PlayerListContainer.propTypes = { dependencies: PropTypes.object.isRequired };

export default withRouter(PlayerListContainer);
