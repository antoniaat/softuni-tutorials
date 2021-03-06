import React, { Component } from "react";
import "../Technology.scss";
import { NavLink, Switch, Route } from 'react-router-dom';
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";

 import  Interfaces  from "./data/Interfaces";
 import  Encapsulation  from "./data/Encapsulation";
 import  EnvironmentSetup  from "./data/EnvironmentSetup";

class Java extends Component {
  render() {
    return (
      <div className="Java technology-container">
        <Tabs
          vertical
          onChange={tabId => {
            console.log(tabId);
          }}
        >
          <TabList>
            <Tab tabFor="Interfaces">
              <NavLink to='/java'>
                <h3>Java Object Oriented</h3>
              </NavLink>
            </Tab>
            <Tab tabFor="JavaTutorial">
              <NavLink to='/java'>
                <h3>Java Tutorial</h3>
              </NavLink>
            </Tab>
          </TabList>
          <TabPanel tabId="Interfaces">
            <Switch>
              <Route path="/java/interfaces" component={Interfaces}></Route>
              <Route path="/java/encapsulation" component={Encapsulation}></Route>
              <Route path="/java">
                <NavLink to='/java/interfaces'>
                  <h2>Interfaces</h2>
                </NavLink>
                <NavLink to='/java/encapsulation'>
                  <h2>Encapsulation</h2>
                </NavLink>
              </Route>
            </Switch>
          </TabPanel>
          <TabPanel tabId="JavaTutorial">
            <Switch>
              <Route path="/java/environment-setup" component={EnvironmentSetup}></Route>
              <Route path="/java">
                <NavLink to='/java/environment-setup'>
                  <h2>Environment Setup</h2>
                </NavLink>
              </Route>
            </Switch>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Java;
