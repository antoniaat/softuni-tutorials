import React from "react";
import "./Navigation.scss";

import { Switch, Route, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Python from "../../Technologies/Python/Python.js";
import Java from "../../Technologies/Java/Java.js";
import CSharp from "../../Technologies/CSharp/CSharp.js";
import JavaScript from "../../Technologies/JavaScript/JavaScript.js";

function Navigation() {
  const faHomeIcon = <FontAwesomeIcon icon={faHome} />;
  const faSearchIcon = <FontAwesomeIcon icon={faSearch} />;

  return (
    <div>
      <div className="Navigation">
        <div className="menu-container">
          <div className="menu-items">
            <NavLink to="/python">
              <span>{faHomeIcon}</span>
            </NavLink>
            <NavLink to="/python">Python</NavLink>
            <NavLink to="/java">Java</NavLink>
            <NavLink to="/javascript">JavaScript</NavLink>
            <NavLink to="/csharp">C#</NavLink>
          </div>

          <div className="search-bar">
            <span>{faSearchIcon}</span>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/python" component={Python}></Route>
        <Route path="/csharp" component={CSharp}></Route>
        <Route path="/java" component={Java}></Route>
        <Route path="/javascript" component={JavaScript}></Route>
      </Switch>
    </div>
  );
}

export default Navigation;
