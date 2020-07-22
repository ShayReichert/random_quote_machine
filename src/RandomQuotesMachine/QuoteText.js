import React, { Component } from 'react';

class QuoteText extends Component {

    
    render() {
        return (
            <div style={{ color: this.props.randomColor }} className="quote-text">
                <i className="fas fa-quote-left"></i>
                <div id="text">{this.props.randomSentence}</div>
            </div>
        )
    }
}

export default QuoteText;