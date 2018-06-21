import React from "react";
import { IntlProvider } from "react-intl";

import renderWithContext from "./render-with-context";
import createPlayersApi from "../../api/players/players-api";
import createAuthApi from "../../api/auth/auth-api";
import App from "../../App";
import allMessages from "../../i18n";
import { flatten } from "../../i18n/i18n-utils";

export default function renderApp({ route, locale = "en" }) {
  const messages = flatten(allMessages[locale]);
  const api = createPlayersApi();
  const authApi = createAuthApi({ delay: 0 });
  const dependencies = {
    api,
    authApi
  };
  const intlProvider = new IntlProvider({ locale, messages }, {});
  const { intl } = intlProvider.getChildContext();
  return {
    ...renderWithContext(<App dependencies={dependencies} intl={intl} />, {
      route
    }),
    api,
    authApi,
    intl // we make the `intl` object available when calling renderApp()
  };
}
