import React, { Component } from "react";
import "../Technology.scss";
import { NavLink, Switch, Route } from 'react-router-dom';
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

import ExpressionStatements from './data/ExpressionStatements';
import AssignmentStatements from './data/AssignmentStatements';

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
            <Tab tabFor="SimpleStatements">
              <NavLink to='/python'>
                <h3>Python Simple Statements</h3>
              </NavLink>
            </Tab>
          </TabList>
          <TabPanel tabId="SimpleStatements">
            <Switch>
              <Route path="/python/expression_statements" component={ExpressionStatements}></Route>
              <Route path="/python/assignment_statements" component={AssignmentStatements}></Route>
              <Route path="/python">
                <NavLink to='/python/expression_statements'>
                  <h2>Expressions Statements</h2>
                </NavLink>
                <NavLink to='/python/assignment_statements'>
                  <h2>Assignment Statements</h2>
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
