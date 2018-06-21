import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import messages from "./i18n/en";
import { flatten } from "./i18n/i18n-utils";

import App from "./App";
import createPlayersApi from "./api/players/players-api";
import createAuthApi from "./api/auth/auth-api";

const dependencies = {
  api: createPlayersApi({ immediate: true }),
  authApi: createAuthApi({ delay: 0 })
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  const history = createMemoryHistory();
  ReactDOM.render(
    <Router history={history}>
      <IntlProvider locale="en" messages={flatten(messages)}>
        <App dependencies={dependencies} />
      </IntlProvider>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
