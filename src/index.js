import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import __intlEN from "react-intl/locale-data/en";
import __intlZH from "react-intl/locale-data/zh";
import __intlJA from "react-intl/locale-data/ja";

import allMessages from "./i18n";
import { flatten } from "./i18n/i18n-utils";

import createApi from "./api/players-api";
import App from "./App";

addLocaleData(__intlEN);
addLocaleData(__intlZH);
addLocaleData(__intlJA);

const dependencies = {
  // immediate false means all API calls are delayed, to simulate the latency
  api: createApi({ immediate: false })
};

const locale = "zh";
const messages = flatten(allMessages[locale]);

render(
  <IntlProvider locale={locale} messages={messages}>
    <Router>
      <App dependencies={dependencies} />
    </Router>
  </IntlProvider>,
  document.getElementById("root")
);
