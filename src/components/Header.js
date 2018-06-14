import React from "react";
// import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { withRouter } from "react-router-dom";

const Header = props => {
  console.log("Header", props);
  return (
    <header>
      <h1>
        <FormattedMessage id={"layout.header"} />
      </h1>
    </header>
  );
};

// Header.propTypes = {};

export default withRouter(Header);
