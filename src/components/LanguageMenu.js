import React from "react";
import { Link } from "react-router-dom";

const LanguageMenu = () => {
  return (
    <div>
      <p>Languages:</p>
      <ul>
        <li>
          <Link to="/en">English</Link>
        </li>
        <li>
          <Link to="/zh">中文</Link>
        </li>
        <li>
          <Link to="/ja">日本語</Link>
        </li>
      </ul>
    </div>
  );
};

export default LanguageMenu;
