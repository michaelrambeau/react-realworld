import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import messages from "./i18n/en";
import { flatten } from "./i18n/i18n-utils";

import App from "./App";
import createPlayersApi from "./api/players/mock/players-api";
import TeamsApi from "./api/players/mock/teams-api";
import createAuthApi from "./api/auth/auth-api";

const storage = {
  get: key => "mike",
  set: (key, value) => null,
  delete: key => null
};

const dependencies = {
  playersApi: createPlayersApi({ daily: 0 }),
  teamsApi: new TeamsApi({ daily: 0 }),
  authApi: createAuthApi({ delay: 0, storage })
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
