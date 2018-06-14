import React from "react";

import Menu from "./components/Menu";
import Routes from "./Routes";
import Header from "./components/Header";
import "./App.css";

const App = ({ dependencies }) => {
  return (
    <div className="container">
      <Header />
      <div id="layout">
        <aside id="sidebar">
          <Menu />
        </aside>
        <main id="main">
          <Routes dependencies={dependencies} />
        </main>
      </div>
    </div>
  );
};

export default App;
