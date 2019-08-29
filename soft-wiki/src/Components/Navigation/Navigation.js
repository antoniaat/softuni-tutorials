import React from 'react';
import './Navigation.css';

import { Switch, Route, NavLink } from 'react-router-dom';

import Python from '../Python/Python';
import Java from '../Java/Java';
import Csharp from '../Csharp/Csharp';
import Javascript from '../Javascript/Javascript';

function Navigation() {
    return(
        <div className="navigation">
            <NavLink to="/python">To Python</NavLink>
            <NavLink to="/java">To Java</NavLink>
            <NavLink to="/javascript">To JavaScript</NavLink>
            <NavLink to="/csharp">To C#</NavLink>
            <Switch>
                <Route path="/python" component={Python}></Route>
                <Route path="/csharp" component={Csharp}></Route>
                <Route path="/java" component={Java}></Route>
                <Route path="/javascript" component={Javascript}></Route>
            </Switch>
        </div>
    )
}

export default Navigation;