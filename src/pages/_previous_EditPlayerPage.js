import React from "react";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import { withProps } from "recompose";

import PlayerForm from "../components/PlayerForm";
import FetchPlayerDetails from "../containers/FetchPlayerDetails";
import Loading from "../components/Loading";
import Alert from "../components/Alert";

// const EditPlayerForm = props => <PlayerForm {...props} isNewPlayer={false} />;
// Not required, but we can do the same thing with `recompose`:S
const EditPlayerForm = withProps({ isNewPlayer: false })(PlayerForm);

const EditPlayerPage = ({ dependencies, match, history }) => {
  const { id } = match.params;
  const { api } = dependencies;
  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await api.edit(values);
      history.push("/players");
    } catch (error) {
      setSubmitting(false);
      setErrors({ general: error.message });
    }
  };
  return (
    <FetchPlayerDetails id={id} api={api}>
      {({ player, loading, error }) => {
        if (loading) return <Loading />;
        if (error) return <Alert>{error.message}</Alert>;
        return (
          <div>
            <h2>Edit {player.name}</h2>
            <Formik onSubmit={onSubmit} initialValues={player}>
              {EditPlayerForm}
            </Formik>
          </div>
        );
      }}
    </FetchPlayerDetails>
  );
};

export default withRouter(EditPlayerPage);
