import {
  waitForElement,
  wait,
  prettyDOM,
  Simulate
} from "react-testing-library";

import renderApp from "./render-app";
import createApi from "../api/players-api";

it("should addd a new player", async () => {
  const api = createApi();
  const count = await api.count();
  const { debug, container, getByLabelText, getByText } = renderApp({
    route: "/add"
  });
  await wait(() => getByText("Add a player"));
  const form = container.querySelector("form");
  // Enter name and team fields
  // const inputName = geLabelTextelName:.name");
  const inputName = getByTestId("player_name_field");
  inputName.value = "Kobe";
  Simulate.change(inputName, "Kobe");
  const inputTeam = getByLabelText("Team:");
  Simulate.change(inputTeam, "Lakers");
  // Submit the form => redirect to the Player List page
  Simulate.submit(form);
});
  Simulate.change(inputName, "Kobe");
  const inputTeam = getByLabelText("Team:");
  Simulate.change(inputTeam, "Lakers");
  // Submit the form => redirect to the Player List page
  Simulate.submit(form);
});
