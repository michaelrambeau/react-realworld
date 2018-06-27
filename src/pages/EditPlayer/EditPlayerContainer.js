import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withProps } from "recompose";

import FetchPlayerDetails from "../../containers/FetchPlayerDetails";
import EditPlayerPage from "./EditPlayerPage";
import Page from "../../templates/Page";

const EditPlayerContainer = ({ dependencies, history, match, ...props }) => {
  const { id, language } = match.params;
  const { playersApi } = dependencies;
  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await playersApi.edit(values);
      history.push(`/${language}/players`);
    } catch (error) {
      setSubmitting(false);
      setErrors({ general: error.message });
    }
  };
  return (
    <Page {...props}>
      <FetchPlayerDetails id={id} api={playersApi}>
        {withProps({ onSubmit })(EditPlayerPage)}
      </FetchPlayerDetails>
    </Page>
  );
};

EditPlayerContainer.propTypes = {
  dependencies: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(EditPlayerContainer);
