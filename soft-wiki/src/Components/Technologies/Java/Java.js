import React from 'react';
import './Java.css';
import Article from '../Article.js';

import java from './java.json';

function Java() {
    return(
        <div className="java">
            This is the Java page
            {java.map(article => { return(
                <Article {...article}></Article>
            ) })}
        </div>
    )
}

export default Java;