import React from 'react';
import './Navigation.scss';

import { Switch, Route, NavLink } from 'react-router-dom';

import Python from '../../Technologies/Python/Python.js';
import Java from '../../Technologies/Java/Java.js';
import CSharp from '../../Technologies/CSharp/CSharp.js';
import JavaScript from '../../Technologies/JavaScript/JavaScript.js';

function Navigation() {
    return (
        <div className="navigation">
            <div className='menu-container'>
                <NavLink to="/python">Python</NavLink>
                <NavLink to="/java">Java</NavLink>
                <NavLink to="/javascript">JavaScript</NavLink>
                <NavLink to="/csharp">C#</NavLink>
                <Switch>
                    <Route path="/python" component={Python}></Route>
                    <Route path="/csharp" component={CSharp}></Route>
                    <Route path="/java" component={Java}></Route>
                    <Route path="/javascript" component={JavaScript}></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Navigation;