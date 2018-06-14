import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import App from "./App";
const AppWithRouter = withRouter(App);

import allMessages from "./i18n";
import { flatten } from "./i18n/i18n-utils";

const AppWithProvider = ({ dependencies, match }) => {
  const locale = match.params.lang || "en";
  const messages = flatten(allMessages[locale]);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <App dependencies={dependencies} />
    </IntlProvider>
  );
};

const AppWithIntl = ({ locale, dependencies }) => {
  const Wrapped = withRouter(AppWithProvider);
  return (
    <Router>
      <Wrapped dependencies={dependencies} />
    </Router>
  );
};

export default AppWithIntl;
// This is a new component I created because `index.js` was too big!
// Can you see that???
