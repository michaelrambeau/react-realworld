import {
  waitForElement,
  wait,
  prettyDOM,
  Simulate
} from "react-testing-library";

import renderApp from "./utils/render-app";
// import createApi from "../api/players-api";

it("should add a new player", async () => {
  // const api = createApi();
  // const count = await api.count();
  const { container, getByLabelText, getByText, intl } = renderApp({
    route: "/en/add"
  });
  await wait(() => getByText("Add a new player"));
  const form = container.querySelector("form");
  // Enter name and team fields
  const inputName = getByLabelText(
    intl.formatMessage({ id: "fields.player.name" })
  );
  inputName.value = "Kobe";
  Simulate.change(inputName);
  const inputTeam = getByLabelText(
    intl.formatMessage({ id: "fields.player.team" })
  );
  inputName.value = "Lakers";
  Simulate.change(inputTeam);
  // Submit the form => redirect to the Player List page
  Simulate.submit(form);
});
