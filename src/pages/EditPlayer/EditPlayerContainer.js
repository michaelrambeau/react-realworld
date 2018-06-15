import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withProps } from "recompose";

import FetchPlayerDetails from "../../containers/FetchPlayerDetails";
import EditPlayerPage from "./EditPlayerPage";
import Page from "../../templates/Page";

const EditPlayerContainer = ({ dependencies, history, match }) => {
  const { id, language } = match.params;
  const { api } = dependencies;
  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await api.edit(values);
      history.push(`/${language}/players`);
    } catch (error) {
      setSubmitting(false);
      setErrors({ general: error.message });
    }
  };
  return (
    <Page>
      <FetchPlayerDetails id={id} api={api}>
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
