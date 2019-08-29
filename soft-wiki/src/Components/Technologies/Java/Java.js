import React from 'react';
import './Java.css';
import Article from '../Article.js';

function Java() {
    const title = "Java Title";
    const content = "Java Content";
 
    return(
        <div className="java">
            This is the java page
            <Article title={title} content={content}></Article>
        </div>
    )
}

export default Java;