import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import AddPlayerPage from "./AddPlayerPage";

const AddPlayerContainer = ({ dependencies, history }) => {
  const { api } = dependencies;
  const onSubmit = async (values, { props, setSubmitting, setErrors }) => {
    try {
      await api.add(values);
      history.push("/players");
    } catch (error) {
      setErrors({ general: error.message });
    }
  };
  return <AddPlayerPage onSubmit={onSubmit} />;
};

AddPlayerContainer.propTypes = {
  dependencies: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(AddPlayerContainer);
