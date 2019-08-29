import React, { Component } from 'react';
import './Article.scss';

class Article extends Component {
    render() {
        return (
            <div className="Article" >
                <h1>{this.props.title}</h1>
                <div className="content">{this.props.content}</div>
            </div>
        )
    }
}

export default Article;