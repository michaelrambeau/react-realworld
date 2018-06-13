import React from "react";
import { IntlProvider } from "react-intl";

import renderWithContext from "./render-with-context";
import createApi from "../api/players-api";
import App from "../App";

export default function renderApp({ route }) {
  const api = createApi();
  const dependencies = {
    api
  };
  return {
    ...renderWithContext(
      <IntlProvider locale="en">
        <App dependencies={dependencies} />
      </IntlProvider>,
      {
        route
      }
    ),
    api
  };
}
