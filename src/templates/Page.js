import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import Layout from "./Layout";
import allMessages from "../i18n";
import { flatten } from "../i18n/i18n-utils";

/**
 * `Page` template used to create all application pages, for logged-in users
 */
const Page = ({ children, match }) => {
  const locale = match.params.language || "en";
  const messages = flatten(allMessages[locale]);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <Layout>{children}</Layout>
    </IntlProvider>
  );
};

export default withRouter(Page);
