import React from "react";

import Menu from "../components/Menu";
import Routes from "../Routes";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div id="layout">
        <aside id="sidebar">
          <Menu />
        </aside>
        <main id="main">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
