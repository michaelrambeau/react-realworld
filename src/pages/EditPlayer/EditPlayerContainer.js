// @flow
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Composer from "react-composer";

import type {
  PlayersApi,
  TeamsApi,
  Player
} from "../../api/players/players-types";
import FetchSingleItem from "../../containers/FetchSingleItem";
import FetchItemList from "../../containers/FetchItemList";

import EditPlayerPage from "./EditPlayerPage";
import Page from "../../templates/Page";

const EditPlayerContainer = (props: {
  dependencies: { playersApi: PlayersApi, teamsApi: TeamsApi },
  history: Object,
  match: Object
}) => {
  const { dependencies, history, match } = props;
  const { id, language } = match.params;
  const idAsNumber = parseInt(id, 10);
  const { playersApi, teamsApi } = dependencies;
  const onSubmit = async (values: Player, { setSubmitting, setErrors }) => {
    try {
      // Extract data to send to the API: remove the `team` object and send the `teamId` instead
      const { team, ...data } = { ...values, teamId: values.team.id };
      await playersApi.update(idAsNumber, data);
      history.push(`/${language}/players`);
    } catch (error) {
      setSubmitting(false);
      setErrors({ general: error.message });
    }
  };
  return (
    <Page {...props}>
      <Composer
        components={[
          <FetchSingleItem id={idAsNumber} api={playersApi} />,
          ({ render }) => <FetchItemList api={teamsApi} children={render} />
        ]}
      >
        {([playerResult, teamsResult]) => {
          const teams = teamsResult.data;
          const player = playerResult.data;
          const loading = playerResult.loading || teamsResult.loading;
          return (
            <EditPlayerPage
              player={player}
              loading={loading}
              onSubmit={onSubmit}
              teams={teams}
            />
          );
        }}
      </Composer>
      {/* <FetchSingleItem id={id} api={playersApi}>
        {withProps({ onSubmit, teams: [] })(EditPlayerPage)}
      </FetchSingleItem> */}
    </Page>
  );
};

EditPlayerContainer.propTypes = {
  dependencies: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(EditPlayerContainer);
