import React from "react";
import { FormattedMessage } from "react-intl";

import Page from "../templates/Page";

const Home = props => {
  return (
    <Page {...props}>
      <div>
        <h2>
          <FormattedMessage id="home.title" />
        </h2>
        <p>Check the routes and switch the language!</p>
      </div>
    </Page>
  );
};

export default Home;
