import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withProps, withState } from "recompose";

import Page from "../../templates/Page";
import FetchItemList from "../../containers/FetchItemList";
import PlayerListPage from "./PlayerListPage";

const PlayerListContainer = ({ dependencies, match, ...props, page, setPage }) => {
  const { playersApi } = dependencies;
  const { language } = match.params;
  const locale = language || "en";
  const limit = 5
  const skip = page * limit;
  const query = {
    skip,
    limit
  }
  return (
    <Page {...props}>
      <FetchItemList api={playersApi} query={query}>
        {withProps({ locale, setPage, query })(PlayerListPage)}
      </FetchItemList>
    </Page>
  );
};

PlayerListContainer.propTypes = { dependencies: PropTypes.object.isRequired };

const addPageState = withState("page", "setPage", 0);

export default withRouter(addPageState(PlayerListContainer));
