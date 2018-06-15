import renderApp from "./utils/render-app";
import { wait } from "react-testing-library";

it("Should render the homepage", () => {
  const { getByText, intl } = renderApp({ route: "/en", locale: "en" });
  wait(() => getByText(intl.formatMessage({ id: "home.title" })));
});
