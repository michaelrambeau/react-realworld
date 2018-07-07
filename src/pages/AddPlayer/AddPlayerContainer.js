// @flow
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import type {
  PlayersApi,
  TeamsApi,
  Player
} from "../../api/players/players-types";

import Page from "../../templates/Page";
import AddPlayerPage from "./AddPlayerPage";
import FetchItemList from "../../containers/FetchItemList";

const AddPlayerContainer = (props: {
  dependencies: { playersApi: PlayersApi, teamsApi: TeamsApi },
  history: Object,
  match: Object
}) => {
  const { dependencies, history, match } = props;
  const { playersApi, teamsApi } = dependencies;
  const { language } = match.params;
  const onSubmit = async (
    values: Player,
    { props, setSubmitting, setErrors }
  ) => {
    try {
      const { team, ...data } = { ...values, teamId: values.team.id };
      await playersApi.create(data);
      history.push(`/${language}/players`);
    } catch (error) {
      setErrors({ general: error.message });
    }
  };
  return (
    <Page {...props}>
      <FetchItemList api={teamsApi}>
        {({ data, loading }) => (
          <AddPlayerPage onSubmit={onSubmit} teams={data} loading={loading} />
        )}
      </FetchItemList>
    </Page>
  );
};

AddPlayerContainer.propTypes = {
  dependencies: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(AddPlayerContainer);
