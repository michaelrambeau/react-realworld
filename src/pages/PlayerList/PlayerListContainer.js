import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withProps } from "recompose";

import Page from "../../templates/Page";
import FetchItemList from "../../containers/FetchItemList";
import PlayerListPage from "./PlayerListPage";

const PlayerListContainer = ({ dependencies, match, ...props }) => {
  const { playersApi } = dependencies;
  const { language } = match.params;
  const locale = language || "en";
  return (
    <Page {...props}>
      <FetchItemList api={playersApi}>
        {withProps({ locale })(PlayerListPage)}
      </FetchItemList>
    </Page>
  );
};

PlayerListContainer.propTypes = { dependencies: PropTypes.object.isRequired };

export default withRouter(PlayerListContainer);
