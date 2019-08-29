import React from 'react';
import './Python.scss';
import Article from '../Article';

import python from './python.json'

function Python() {
    return(
        <div className="python">
            This is the python page
            {python.map(article => { return(
                <Article {...article}></Article>
            )})}
        </div>
    )
}

export default Python;