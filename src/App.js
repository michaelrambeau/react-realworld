import React from "react";

import Menu from "./components/Menu";
import Routes from "./Routes";
import Header from "./components/Header";
import "./App.css";

const App = ({ dependencies }) => {
  return <Routes dependencies={dependencies} />;
};

export default App;
