import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { IntlProvider } from "react-intl";
import messages from "./i18n/en";

import createApi from "./api/players-api";
import App from "./App";

const dependencies = {
  // immediate false means all API calls are delayed, to simulate the latency
  api: createApi({ immediate: false })
};

render(
  <IntlProvider locale="en" messages={messages}>
    <Router>
      <App dependencies={dependencies} />
    </Router>
  </IntlProvider>,
  document.getElementById("root")
);
