import React from "react";
import { IntlProvider } from "react-intl";

import renderWithContext from "./render-with-context";
import createApi from "../../api/players-api";
import App from "../../App";
import allMessages from "../../i18n";
import { flatten } from "../../i18n/i18n-utils";

export default function renderApp({ route, locale = "en" }) {
  const messages = flatten(allMessages[locale]);
  const api = createApi();
  const dependencies = {
    api
  };
  const intlProvider = new IntlProvider({ locale, messages }, {});
  const { intl } = intlProvider.getChildContext();
  return {
    ...renderWithContext(
      <IntlProvider locale={locale} messages={messages}>
        <App dependencies={dependencies} intl={intl} />
      </IntlProvider>,
      {
        route
      }
    ),
    api,
    intl // we make the `intl` object available when calling renderApp()
  };
}
