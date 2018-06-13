import React from "react";
import PlayerList from "../components/PlayerList";
import FetchPlayers from "../containers/FetchPlayers";
import Loading from "../components/Loading";
import Alert from "../components/Alert";

const PlayerListPage = ({ dependencies }) => {
  const { api } = dependencies;
  return (
    <div>
      <h2>Player List</h2>
      <FetchPlayers api={api}>
        {({ players, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Alert>{error.message}</Alert>;
          return <PlayerList players={players} />;
        }}
      </FetchPlayers>
    </div>
  );
};

export default PlayerListPage;