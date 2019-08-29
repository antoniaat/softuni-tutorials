import React from 'react';
import './Navigation.scss';

import { Switch, Route, NavLink } from 'react-router-dom';

import Python from '../../Technologies/Python/Python.js';
import Java from '../../Technologies/Java/Java';
import Csharp from '../../Technologies/Csharp/Csharp';
import JavaScript from '../../Technologies/JavaScript/JavaScript.js';

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
                <Route path="/javascript" component={JavaScript}></Route>
            </Switch>
        </div>
    )
}

export default Navigation;