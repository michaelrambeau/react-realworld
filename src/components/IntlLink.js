import React from "react";
import { Link } from "react-router-dom";

const IntlLink = ({ children, to, locale = "en", ...props }) => {
  const fullPath = `/${locale}${to}`;
  return (
    <Link {...props} to={fullPath}>
      {children}
    </Link>
  );
};

export default IntlLink;
