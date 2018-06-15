import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withProps } from "recompose";

import Page from "../../templates/Page";
import FetchPlayers from "../../containers/FetchPlayers";
import PlayerListPage from "./PlayerListPage";

const PlayerListContainer = ({ dependencies, match, ...props }) => {
  const { api } = dependencies;
  const { language } = match.params;
  const locale = language || "en";
  return (
    <Page {...props}>
      <FetchPlayers api={api}>
        {withProps({ locale })(PlayerListPage)}
      </FetchPlayers>
    </Page>
  );
};

PlayerListContainer.propTypes = { dependencies: PropTypes.object.isRequired };

export default withRouter(PlayerListContainer);
