import React from "react";
import { withRouter } from "react-router-dom";
import Link from "./IntlLink";
import { FormattedMessage } from "react-intl";

const Menu = ({ match }) => {
  const { language } = match.params;
  const locale = language || "en";
  return (
    <div className="menu">
      <Link className="menu-item" to="/" locale={locale}>
        <FormattedMessage id="layout.menu.home" />
      </Link>
      <Link className="menu-item" to="/players" locale={locale}>
        All Players
      </Link>
      <Link className="menu-item" to="/players/1" locale={locale}>
        Player #1
      </Link>
      <Link className="menu-item" to="/players/2" locale={locale}>
        Player #2
      </Link>
      <Link className="menu-item" to="/add" locale={locale}>
        Add
      </Link>
    </div>
  );
};

export default withRouter(Menu);
