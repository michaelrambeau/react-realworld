import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Alert = ({children, isError, isSuccess, isWarning, isInfo}) => {
  const className = classNames("alert", {
    "alert-error": isError,
    "alert-success": isSuccess,
    "alert-warning": isWarning,
    "alert-info": isInfo,
  });
  return <div className={className}>{children}</div>;
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  isError: PropTypes.bool,
  isWarning: PropTypes.bool,
  isInfo: PropTypes.bool,
};

export default Alert;
