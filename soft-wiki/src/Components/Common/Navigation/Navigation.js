import React from "react";
import "./Navigation.scss";

import { Switch, Route, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Python from "../../technologies/Python/Python.js";
import Java from "../../technologies/Java/Java.js";
import CSharp from "../../technologies/CSharp/CSharp.js";
import JavaScript from "../../technologies/JavaScript/JavaScript.js";

function Navigation() {
  const faHomeIcon = <FontAwesomeIcon icon={faHome} />;
  const faSearchIcon = <FontAwesomeIcon icon={faSearch} />;

  return (
    <div>
      <div className="Navigation">
        <div className="menu-container">
          <div className="menu-items">
            <NavLink to="/csharp">
              <span>{faHomeIcon}</span>
            </NavLink>
            <NavLink to="/csharp" activeClassName="active">
              C#
            </NavLink>

            <NavLink activeClassName="active" to="/javascript">
              JavaScript
            </NavLink>

            <NavLink activeClassName="active" to="/java">
              Java
            </NavLink>

            <NavLink activeClassName="active" to="/python">
              Python
            </NavLink>
          </div>

          {/* <div className="search-bar">
            <span>{faSearchIcon}</span>
          </div> */}
        </div>
      </div>
      <Switch>
        <Route path="/csharp" component={CSharp}></Route>
        <Route path="/javascript" component={JavaScript}></Route>
        <Route path="/java" component={Java}></Route>
        <Route path="/python" component={Python}></Route>
        <Route path="/" component={CSharp}></Route>
      </Switch>
    </div>
  );
}

export default Navigation;
