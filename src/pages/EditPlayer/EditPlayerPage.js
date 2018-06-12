import React from "react";
import PropTypes from "prop-types";

const EditPlayerPage = ({ dependencies, history, match }) => {
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
