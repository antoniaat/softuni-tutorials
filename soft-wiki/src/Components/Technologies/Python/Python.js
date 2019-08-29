import React from 'react';
import './Python.scss';
import Article from '../Article.js';

import PythonData from './PythonData.json'

function Python() {
    return(
        <div className="python">
            This is the python page
            {PythonData.map(article => { return(
                <Article {...article}></Article>
            )})}
        </div>
    )
}

export default Python;