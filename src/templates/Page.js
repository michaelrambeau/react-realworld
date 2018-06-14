import React from "react";
import PropTypes from "prop-types";

import Layout from "./Layout";

/**
 * `Page` template used to create all application pages, for logged-in users
 */
const Page = ({ auth, title, id, breadcrumbIds, intl, children }) => {
  return <Layout auth={auth}>{children}</Layout>;
};

export default Page;
