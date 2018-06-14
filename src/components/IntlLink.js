import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

const IntlLink = ({ children, to, locale = "en", ...props }) => {
  const fullPath = `/${locale}${to}`;
  return (
    <Link {...props} to={fullPath}>
      {children}
    </Link>
  );
};

IntlLink.propTypes = {};

export default IntlLink;
