import React, { Component } from 'react';

class QuoteAuthor extends Component {
    render() {
        const { randomAuthor, randomColor } = this.props;
        return (
            <div style={{color: randomColor}} className="quote-author">
                <div id="author"> - {randomAuthor}</div>
            </div>
        )
    }
}

export default QuoteAuthor;