import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import __intlEN from "react-intl/locale-data/en";
import __intlZH from "react-intl/locale-data/zh";
import __intlJA from "react-intl/locale-data/ja";

import createApi from "./api/players-api";
import AppWithIntl from "./AppWithIntl";

addLocaleData(__intlEN);
addLocaleData(__intlZH);
addLocaleData(__intlJA);

const dependencies = {
  // immediate false means all API calls are delayed, to simulate the latency
  api: createApi({ immediate: false })
};

const locale = "en";
render(
  <AppWithIntl locale={locale} dependencies={dependencies} />,
  document.getElementById("root")
);
