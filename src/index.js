import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { /*IntlProvider,*/ addLocaleData } from "react-intl";
import __intlEN from "react-intl/locale-data/en";
import __intlZH from "react-intl/locale-data/zh";
import __intlJA from "react-intl/locale-data/ja";

import createPlayersApi from "./api/players/players-api";
import createAuthApi from "./api/auth/auth-api";
import App from "./App";

addLocaleData(__intlEN);
addLocaleData(__intlZH);
addLocaleData(__intlJA);

const storage = {
  get: key => window.localStorage.getItem(key),
  set: (key, value) => window.localStorage.setItem(key, value),
  delete: (key) => window.localStorage.removeItem(key)
};

const dependencies = {
  playersApi: createPlayersApi({ delay: 500 }),
  authApi: createAuthApi({ delay: 1000, storage })
};

render(
  <Router>
    <App dependencies={dependencies} />
  </Router>,
  document.getElementById("root")
);
