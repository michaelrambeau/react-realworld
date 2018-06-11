import React from "react";

import renderWithContext from "./render-with-context";
import createApi from "../api/players-api";
import App from "../App";

export default function renderApp({ route }) {
  const api = createApi();
  const dependencies = {
    api
  };
  return {
    ...renderWithContext(<App dependencies={dependencies} />, {
      route
    }),
    api
  };
}
