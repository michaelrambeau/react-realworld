import React from "react";
import PropTypes from "prop-types";
import FetchPlayerDetails from "../../containers/FetchPlayerDetails";
import EditPlayerPage from "./EditPlayerPage";

const EditPlayerContainer = ({ dependencies, history, match }) => {
  const { id } = match.params;
  const { api } = dependencies;
  return (
    <FetchPlayerDetails id={id} api={api}>
      {EditPlayerPage}
    </FetchPlayerDetails>
  );
};

EditPlayerContainer.propTypes = {};

export default EditPlayerContainer;
