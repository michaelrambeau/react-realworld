import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { withProps } from "recompose";

import PlayerForm from "../../components/PlayerForm";

const initialValues = {
  firstName: "",
  lastName: "",
  team: null
};

const AddPlayerPage = ({ onSubmit, teams, ...props }) => {
  const AddPlayerForm = withProps({ isNewPlayer: true, teams })(PlayerForm);
  return (
    <Fragment>
      <h2>Add a new player</h2>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {AddPlayerForm}
      </Formik>
    </Fragment>
  );
};

AddPlayerPage.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddPlayerPage;
