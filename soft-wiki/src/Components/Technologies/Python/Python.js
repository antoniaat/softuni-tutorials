import React, { Component } from "react";
import "../Technology.scss";
import { NavLink, Switch, Route } from 'react-router-dom';
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

import PythonNumber from './data/PythonNumber';
import PythonString from './data/PythonString';
import IfElseStatement from './data/IfElseStatement';
import ForStatement from './data/ForStatement';

class Python extends Component {
  render() {
    return (
      <div className="Python technology-container">
        <Tabs
          vertical
          onChange={tabId => {
            console.log(tabId);
          }}
        >
          <TabList>
            <Tab tabFor="DataTypes">
              <NavLink to='/python'>
                <h3>Python Data Types</h3>
              </NavLink>
            </Tab>
            <Tab tabFor="Statements">
              <NavLink to='/python'>
                <h3>Python Statements</h3>
              </NavLink>
            </Tab>
          </TabList>
          <TabPanel tabId="DataTypes">
            <Switch>
              <Route path="/python/number" component={PythonNumber}></Route>
              <Route path="/python/string" component={PythonString}></Route>
              <Route path="/python">
                <NavLink to='/python/number'>
                  <h2>Number</h2>
                </NavLink>
                <NavLink to='/python/string'>
                  <h2>String</h2>
                </NavLink>
              </Route>
            </Switch>
          </TabPanel>
          <TabPanel tabId="Statements">
            <Switch>
              <Route path="/python/if_else" component={IfElseStatement}></Route>
              <Route path="/python/for" component={ForStatement}></Route>
              <Route path="/python">
                <NavLink to='/python/if_else'>
                  <h2>If-Else Statement</h2>
                </NavLink>
                <NavLink to='/python/for'>
                  <h2>For Statement</h2>
                </NavLink>
              </Route>
            </Switch>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Python;
