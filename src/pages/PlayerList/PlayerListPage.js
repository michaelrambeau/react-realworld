import React from "react";
import PropTypes from "prop-types";

import Page from "../../templates/Page";
import PlayerList from "../../components/PlayerList";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";

const List = ({ loading, error, players, locale }) => {
  if (loading) return <Loading />;
  if (error) return <Alert>{error.message}</Alert>;
  return <PlayerList players={players} locale={locale} />;
};

const PlayerListPage = props => {
  return (
    <Page>
      <h2>Player List</h2>
      <List {...props} />
    </Page>
  );
};

PlayerListPage.propTypes = {
  player: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  locale: PropTypes.string.isRequired
};

export default PlayerListPage;
