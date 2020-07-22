import React, { Component } from 'react';
import QuoteText from './QuoteText';
import QuoteAuthor from './QuoteAuthor';
import Buttons from './Buttons';
import jsonQuotes from '../quotes.json';

class QuoteBox extends Component {

    state = {
        appearQuote: true,
        sentence: "Elles ne retiennent que la belette.",
        author: "Cerise Caouette"
    }

    //Generate a random quotes and author from JSON file
    randomNumb = () => {
        return Math.floor(Math.random() * (jsonQuotes.quotes.length - 1));
    }

    //Set a random quotes and author on first load
    componentDidMount() {
        this.setState({
            sentence: jsonQuotes.quotes[this.randomNumb()].quote,
            author: jsonQuotes.quotes[this.randomNumb()].author
        })
    }

    //Set a random sentence and author on click
    randomQuoteAndAuthor = () => {
        this.setState({
            sentence: jsonQuotes.quotes[this.randomNumb()].quote,
            author: jsonQuotes.quotes[this.randomNumb()].author
        })
    }

    render() {
        return (
            <div id="quote-box">
                <QuoteText randomSentence={this.state.sentence} randomColor={this.props.randomColor} />
                <QuoteAuthor randomAuthor={this.state.author} randomColor={this.props.randomColor} />
                <Buttons randomSentence={this.state.sentence} randomAuthor={this.state.author} randomclick={this.randomQuoteAndAuthor} onclick={this.props.onclick} randomColor={this.props.randomColor} />
            </div>
        )
    }
}
export default QuoteBox;