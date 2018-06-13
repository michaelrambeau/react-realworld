import React from "react";
import PropTypes from "prop-types";
import FetchPlayers from "../../containers/FetchPlayers";
import PlayerListPage from "./PlayerListPage";

const PlayerListContainer = ({ dependencies }) => {
  const { api } = dependencies;
  return <FetchPlayers api={api}>{PlayerListPage}</FetchPlayers>;
};

PlayerListContainer.propTypes = { dependencies: PropTypes.object.isRequired };

export default PlayerListContainer;
