import React from "react";
import { withRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import Layout from "./Layout";
import allMessages from "../i18n";
import { flatten } from "../i18n/i18n-utils";

function getMessages(language) {
  const locale = allMessages[language] ? language : "en";
  const nestedMessages = allMessages[locale];
  const messages = flatten(nestedMessages);
  return { messages, locale };
}

/**
 * `Page` template used to create all application pages, for logged-in users
 */
const Page = props => {
  const { children, match } = props;
  const { language } = match.params;
  const { messages, locale } = getMessages(language);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <Layout {...props}>{children}</Layout>
    </IntlProvider>
  );
};

export default withRouter(Page);
