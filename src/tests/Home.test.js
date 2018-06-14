import renderApp from "./utils/render-app";

it("Should render the homepage", () => {
  const { getByText, intl } = renderApp({ route: "/", locale: "en" });
  getByText(intl.formatMessage({ id: "home.title" }));
});
