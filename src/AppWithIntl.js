import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { IntlProvider } from "react-intl";
import App from "./App";

import allMessages from "./i18n";
import { flatten } from "./i18n/i18n-utils";

const AppWithIntl = ({ locale, dependencies }) => {
  const messages = flatten(allMessages[locale]);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <App dependencies={dependencies} />
      </Router>
    </IntlProvider>
  );
};

export default AppWithIntl;
// This is a new component I created because `index.js` was too big!
// Can you see that???
