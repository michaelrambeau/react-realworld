import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { withProps } from "recompose";

import Loading from "../../components/Loading";
import Alert from "../../components/Alert";
import PlayerForm from "../../components/PlayerForm";

const EditPlayerForm = withProps({ isNewPlayer: false })(PlayerForm);

const EditPlayerPage = ({ player, loading, error, onSubmit }) => {
  if (loading) return <Loading />;
  if (error) return <Alert>{error.message}</Alert>;
  return (
    <Fragment>
      <h2>Edit {player.name}</h2>
      <Formik onSubmit={onSubmit} initialValues={player}>
        {EditPlayerForm}
      </Formik>
    </Fragment>
  );
};

EditPlayerPage.propTypes = {
  player: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  onSubmit: PropTypes.func.isRequired
};

export default EditPlayerPage;
