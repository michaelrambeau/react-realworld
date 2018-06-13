import React from "react";
import PropTypes from "prop-types";
import PlayerList from "../../components/PlayerList";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";

const List = ({ loading, error, players }) => {
  if (loading) return <Loading />;
  if (error) return <Alert>{error.message}</Alert>;
  return <PlayerList players={players} />;
};

const PlayerListPage = props => {
  return (
    <div>
      <h2>Player List</h2>
      <List {...props} />
    </div>
  );
};

PlayerListPage.propTypes = {
  player: PropTypes.object,
  loading: PropTypes.boolean,
  error: PropTypes.object
};

export default PlayerListPage;
