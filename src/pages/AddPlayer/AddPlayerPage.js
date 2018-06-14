import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { withProps } from "recompose";
import Page from "../../templates/Page";

import PlayerForm from "../../components/PlayerForm";

const AddPlayerForm = withProps({ isNewPlayer: true })(PlayerForm);

const initialValues = {
  name: "",
  team: ""
};

const AddPlayerPage = ({ onSubmit }) => {
  return (
    <Page>
      <h2>Add a new player</h2>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {AddPlayerForm}
      </Formik>
    </Page>
  );
};

AddPlayerPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddPlayerPage;
