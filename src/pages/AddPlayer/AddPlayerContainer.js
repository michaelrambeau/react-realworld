import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Page from "../../templates/Page";
import AddPlayerPage from "./AddPlayerPage";

const AddPlayerContainer = ({ dependencies, history, match, ...props }) => {
  const { api } = dependencies;
  const { language } = match.params;
  const onSubmit = async (values, { props, setSubmitting, setErrors }) => {
    try {
      await api.add(values);
      history.push(`/${language}/players`);
    } catch (error) {
      setErrors({ general: error.message });
    }
  };
  return (
    <Page {...props}>
      <AddPlayerPage onSubmit={onSubmit} />
    </Page>
  );
};

AddPlayerContainer.propTypes = {
  dependencies: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(AddPlayerContainer);
