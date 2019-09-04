import React, { Component } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import { NavLink, Switch, Route } from "react-router-dom";
import "../Technology.scss";

import NodeJS from "./data/NodeJS.js";
import Functions from "./data/Functions.js";
import ConditionalStatements from "./data/ConditionalStatements.js";

class JavaScript extends Component {
  render() {
    return (
      <div className="JavaScript technology-container">
        <Tabs
          vertical
          onChange={tabId => {
            console.log(tabId);
          }}
        >
          <TabList>
            <Tab tabFor="Syntax">
              <h3>JavaScript Syntax</h3>
            </Tab>
          </TabList>
          <TabPanel tabId="Syntax">
            <Switch>
              <Route path="/javascript/nodejs" component={NodeJS}></Route>
              <Route path="/javascript/functions" component={Functions}></Route>
              <Route
                path="/javascript/conditional-statements"
                component={ConditionalStatements}
              ></Route>

              <Route path="/javascript">
                <NavLink to="/javascript/nodejs">
                  <h2>Node.js</h2>
                </NavLink>

                <NavLink to="/javascript/functions">
                  <h2>Functions</h2>
                </NavLink>

                <NavLink to="/javascript/conditional-statements">
                  <h2>Conditional Statements</h2>
                </NavLink>
              </Route>
            </Switch>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default JavaScript;
