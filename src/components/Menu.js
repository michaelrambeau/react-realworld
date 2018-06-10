import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <Link className="menu-item" to="/">
        Home
      </Link>
      <Link className="menu-item" to="/players">
        All Players
      </Link>
      <Link className="menu-item" to="/players/1">
        Player #1
      </Link>
      <Link className="menu-item" to="/players/2">
        Player #2
      </Link>
      <Link className="menu-item" to="/add">
        Add
      </Link>
    </div>
  );
};

export default Menu;
