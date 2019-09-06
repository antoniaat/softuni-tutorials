import React, { Component } from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import { NavLink, Switch, Route } from "react-router-dom";
import "../Technology.scss";

import NodeJS from "./data/NodeJS.js";
import Functions from "./data/Functions.js";
import ConditionalStatements from "./data/ConditionalStatements.js";
import Loops from "./data/Loops.js";
import LetVSVar from "./data/LetVSVar.js";
import VariablesScope from "./data/VariablesScope.js";

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
            <Tab tabFor="DataTypes">
              <h3>Data Types</h3>
            </Tab>
            <Tab tabFor="Variables">
              <h3>Variables</h3>
            </Tab>
            <Tab tabFor="Arrays">
              <h3>Arrays</h3>
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
              <Route path="/javascript/loops" component={Loops}></Route>

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
                <NavLink to="/javascript/loops">
                  <h2>Loops</h2>
                </NavLink>
              </Route>
            </Switch>
          </TabPanel>

          <TabPanel tabId="DataTypes">
            <p>
              The data type of a value is an attribute that tells what kind of
              data that value can have After ECMAScript 2015 there are seven
              data types: Six primitive: Boolean, Null, Undefined, Number,
              String, Symbol (new in ECMAScript 6) and Objects
            </p>
          </TabPanel>

          <TabPanel tabId="Variables">
            <Switch>
              <Route path="/javascript/letvsvar" component={LetVSVar}></Route>
              <Route
                path="/javascript/varibles-scope"
                component={VariablesScope}
              ></Route>

              <Route path="/javascript">
                <NavLink to="/javascript/letvsvar">
                  <h2>let VS var</h2>
                </NavLink>
              </Route>
              <Route path="/javascript">
                <NavLink to="/javascript/varibles-scope">
                  <h2>lVariablesScope</h2>
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
