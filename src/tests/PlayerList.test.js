import { waitForElement, wait } from "react-testing-library";

import renderApp from "./utils/render-app";

it("Should render the player list with 3 players", async () => {
  const { getByText, container, api } = renderApp({ route: "/en/players" });
  getByText(/Player List/i);
  await wait(() => getByText(/Curry/));
  const table = await waitForElement(() => container.querySelector("table"));
  const links = Array.from(table.querySelectorAll("a"));
  const count = await api.count();
  expect(links.length).toBe(count);
});
