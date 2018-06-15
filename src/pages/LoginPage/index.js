import React from "react";
import PropTypes from "prop-types";

import Page from "../../templates/Page";

const LoginPage = props => {
  // return <div>No!</div>;
  return <Page {...props}>Unauthorized!</Page>;
};

LoginPage.propTypes = {
  intl: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default LoginPage;
