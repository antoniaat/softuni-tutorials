import React from 'react';
import './Java.scss';
import Article from '../Article.js';

import JavaData from './JavaData.json';

function Java() {
    return (
        <div className="java">
            This is the Java page
            {JavaData.map(article => {
                return (
                    <Article {...article}></Article>
                )
            })}
        </div>
    )
}

export default Java;