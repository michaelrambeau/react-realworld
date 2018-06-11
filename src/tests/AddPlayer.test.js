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
  const inputName = getByLabelText("Name:");
  inputName.value = "Kobe";
  Simulate.change(inputName, "Kobe");
  const inputTeam = getByLabelText("Team:");
  Simulate.change(inputTeam, "Lakers");
  // Submit the form => redirect to the Player List page
  Simulate.submit(form);
  // Wait for the loading
  await waitForElement(() => getByText("Team"));
  // Check the results displayed in the table
  const table = container.querySelector("table");
  const rows = Array.from(table.querySelectorAll("tbody tr"));
  expect(rows.length).toBe(count + 1);
});
