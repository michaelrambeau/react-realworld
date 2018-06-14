import React from "react";
import { FormattedMessage } from "react-intl";

import Page from "../templates/Page";

const Home = () => {
  return (
    <Page>
      <div>
        <h2>
          <FormattedMessage id="home.title" />
        </h2>
        <p>A React application to highlight</p>
        <ul>
          <li>Data fetching</li>
          <li>API dependency injection</li>
          <li>Form Handling</li>
          <li>Routing</li>
          <li>i18n</li>
          <li>...</li>
        </ul>
      </div>
    </Page>
  );
};

export default Home;
