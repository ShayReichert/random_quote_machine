import React, { Component } from 'react';
import QuoteBox from './QuoteBox';
import './QuoteWrapper.css'; 

 class QuotesWrapper extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             randomColor: '#144454'
        }
    }

//generate a random color with minimal brightness
    newBackgroundColor = () => {
        function randomChannel() {
            var r = 255 - 10;
            var n = 0 | ((Math.random() * r) + 10);
            var s = n.toString(16);
            return (s.length === 1) ? '0' + s : s;
        }
        this.setState({
            randomColor: '#' + randomChannel() + randomChannel() + randomChannel()
        })
    }
    render() {
        return (
            <div style={{backgroundColor: this.state.randomColor}} id="wrapper">
                <QuoteBox randomColor={this.state.randomColor} onclick={this.newBackgroundColor}  />
            </div>
        )
    }
}

export default QuotesWrapper;



//// BUGS TO FIXED //////
//amélioration : couleur random avec un seuil de luminosité maximale
// fondu transition pour l'apparition de la phrase et de l'auteur aléatoire
// Au chargement: faire apparaître une citation aléatoirement.



////// BUGS FIXED //////
//bug : de temps en temps, la méthode randomNumb de la fonction randomQuoteAndAuthor dans QuoteBox crash.
