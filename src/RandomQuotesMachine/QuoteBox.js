import React, { Component } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import Buttons from './Buttons';
import jsonQuotes from '../quotes.json';

class QuoteBox extends Component {

    state = {
        sentence: "Elles ne retiennent que la belette.",
        author: "Cerise Caouette"
    }

    //Generate a random sentence and author 
    randomQuoteAndAuthor = () => {
        function randomNumb() {
            return Math.floor(Math.random() * (jsonQuotes.quotes.length -1));
        }
        this.setState({
            sentence: jsonQuotes.quotes[randomNumb()].quote,
            author: jsonQuotes.quotes[randomNumb()].author
        })
    }

    render() {
        return (
            <div id="quote-box">
                <QuoteText randomSentence={this.state.sentence} randomColor={this.props.randomColor} />
                <QuoteAuthor randomAuthor={this.state.author} randomColor={this.props.randomColor} />
                <Buttons randomclick={this.randomQuoteAndAuthor} onclick={this.props.onclick} randomColor={this.props.randomColor} />
            </div>
        )
    }
}
export default QuoteBox;