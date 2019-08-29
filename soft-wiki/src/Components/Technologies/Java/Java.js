import React from 'react';
import './Java.css';
import Article from '../Article.js';

function Java() {
    return(
        <div className="java">
            This is the java page

            <Article title={JavaTitle}></Article>
        </div>
    )
}

export default Java;