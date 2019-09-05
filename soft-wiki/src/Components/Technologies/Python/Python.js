import React, { Component } from "react";
import "../Technology.scss";
import { NavLink, Switch, Route } from 'react-router-dom';
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

import InstallingPython from './data/InstallingPython';
import BasicSyntax from './data/BasicSyntax';
import IfElseStatement from './data/IfElseStatement';
import ForStatement from './data/ForStatement';
import ConditionalStatements from './data/ConditionalStatements';

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
            <Tab tabFor="BasicSyntaxConditionalStatementsAndLoops">
              <NavLink to='/python'>
                <h3>Basic Syntax, Conditional <br/> Statements and Loops</h3>
              </NavLink>
            </Tab>
            <Tab tabFor="DataTypesAndVariables">
              <NavLink to='/python'>
                <h3>Data Types and Variables</h3>
              </NavLink>
            </Tab>
          </TabList>
          <TabPanel tabId="BasicSyntaxConditionalStatementsAndLoops">
            <Switch>
              <Route path="/python/installing_python" component={InstallingPython}></Route>
              <Route path="/python/basic_syntax" component={BasicSyntax}></Route>
              <Route path="/python/conditional_statements" component={ConditionalStatements}></Route>
              <Route path="/python">
                <NavLink to='/python/installing_python'>
                  <h2>Installing Python</h2>
                </NavLink>
                <NavLink to='/python/basic_syntax'>
                  <h2>Basic Syntax</h2>
                </NavLink>
                <NavLink to='/python/conditional_statements'>
                  <h2>Conditional Statements</h2>
                </NavLink>
              </Route>
            </Switch>
          </TabPanel>
          <TabPanel tabId="DataTypesAndVariables">
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
