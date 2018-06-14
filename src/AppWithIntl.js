import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import allMessages from "./i18n";
import { flatten } from "./i18n/i18n-utils";

import App from "./App";
const AppWithRouter = withRouter(App);

const AppWithProvider = ({ dependencies, match }) => {
  const locale = match.params.language || "en";
  const messages = flatten(allMessages[locale]);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <App dependencies={dependencies} />
    </IntlProvider>
  );
};

const AppWithIntl = ({ dependencies }) => {
  const Wrapped = withRouter(AppWithProvider);
  return (
    <Router>
      <Wrapped dependencies={dependencies} />
    </Router>
  );
};

export default AppWithIntl;
