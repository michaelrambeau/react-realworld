import React from "react";
import PropTypes from "prop-types";

import Page from "../../templates/Page";

const LoginPage = props => {
  return <Page {...props}>Unauthorized!</Page>;
};

LoginPage.propTypes = {
  auth: PropTypes.object.isRequired
};

export default LoginPage;
