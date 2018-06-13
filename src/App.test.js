import React from "react";
import { withRouter } from "react-router";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import messages from "./i18n/en";

import App from "./App";
import { render, Simulate, wait, prettyDOM } from "react-testing-library";
import createApi from "./api/players-api";

const dependencies = {
  api: createApi({ immediate: false })
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  const history = createMemoryHistory();
  ReactDOM.render(
    <Router history={history}>
      <IntlProvider locale="en" messages={messages}>
        <App dependencies={dependencies} />
      </IntlProvider>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
