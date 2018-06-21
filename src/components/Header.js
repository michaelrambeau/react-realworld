import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { withRouter } from "react-router-dom";

const Header = ({ auth }) => {
  return (
    <header style={{ borderBottom: "1px dashed #ccc", marginBottom: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <h1>
            <FormattedMessage id={"layout.header"} />
          </h1>
        </div>
        <div style={{ textAlign: "right", flexGrow: 1 }}>
          {auth.isAuthenticated ? (
            <LoggedinUserBlock auth={auth} />
          ) : (
            <AnonymousUserBlock auth={auth} />
          )}
        </div>
      </div>
    </header>
  );
};

const AnonymousUserBlock = ({ auth }) => {
  return (
    <div>
      <button
        onClick={() => auth.login({ username: "mike" })}
        className="btn btn-default btn-ghost"
        type="button"
      >
        LOGIN
      </button>
    </div>
  );
};

const LoggedinUserBlock = ({ auth }) => {
  return (
    <div>
      <button
        onClick={auth.logout}
        className="btn btn-default btn-ghost"
        type="button"
      >
        LOGOUT
      </button>
    </div>
  );
};

Header.propTypes = { auth: PropTypes.object.isRequired };

export default withRouter(Header);
