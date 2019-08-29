import React from 'react';
import './Csharp.css';
import Article from '../Article';

import csharp from './csharp.json';

function Csharp() {
    return(
        <div className="csharp">
            This is the csharp page
            {csharp.map(article => { return(
                <Article {...article}></Article>
            )})}
        </div>
    )
}

export default Csharp;