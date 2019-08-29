import React from 'react';
import './JavaScript.scss';
import Article from '../Article';

import javascript from './javascript.json';

function JavaScript() {
    return(
        <div className="JavaScript">
            This is the JavaScript page
            {javascript.map(article => { return(
                <Article {...article}></Article>
            )})}
        </div>
    )
}

export default JavaScript;