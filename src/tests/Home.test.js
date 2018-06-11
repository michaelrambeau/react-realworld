import React from "react";
import { waitForElement, wait, prettyDOM } from "react-testing-library";

import renderApp from "./render-app";

it("Should render the homepage", () => {
  const { getByText } = renderApp({ route: "/" });
  getByText(/Welcome/i);
});
