import React, { Component } from 'react';
import './Article.scss';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };
    }

    render() {
        return (
            <div className="Article" >
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}

export default Article;