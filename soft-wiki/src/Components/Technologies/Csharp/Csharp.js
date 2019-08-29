import React from 'react';
import './CSharp.scss';
import Article from '../Article.js';

import csharp from './CSharpData.json';

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