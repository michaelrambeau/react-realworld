import React from "react";
import { Formik } from "formik";
import PlayerForm from "../components/PlayerForm";
import FetchPlayers from "../containers/FetchPlayers";
import { withRouter } from "react-router-dom";

const AddPlayerForm = props => <PlayerForm {...props} isNewPlayer={true} />;
const intialValues = {
  name: "",
  team: ""
};

const AddPlayerListPage = ({ dependencies, history }) => {
  const { api } = dependencies;
  const onSubmit = async values => {
    api.add(values);
    await history.push("/players");
  };
  return (
    <div>
      <h2>Add a player</h2>
      <FetchPlayers api={api}>
        {({ players }) => {
          return (
            <div>
              <Formik onSubmit={onSubmit} initialValues={intialValues}>
                {AddPlayerForm}
              </Formik>
            </div>
          );
        }}
      </FetchPlayers>
    </div>
  );
};

export default withRouter(AddPlayerListPage);
