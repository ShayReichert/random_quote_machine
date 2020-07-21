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


    //Generate a random color with a minimal brightness threshold
    randomChannel = () => {
        var r = 255 - 10;
        var n = 0 | ((Math.random() * r) + 10);
        var s = n.toString(16);
        return (s.length === 1) ? '0' + s : s;
    }

    //Set a random color on first load on State
    componentDidMount() {
        this.setState({
            randomColor: '#' + this.randomChannel() + this.randomChannel() + this.randomChannel()
        })
    }

    //Set the random hex color code on click
    newBackgroundColor = () => {
        this.setState({
            randomColor: '#' + this.randomChannel() + this.randomChannel() + this.randomChannel()
        })
    }


    render() {
        return (
            <div style={{ backgroundColor: this.state.randomColor }} id="wrapper">
                <QuoteBox randomColor={this.state.randomColor} onclick={this.newBackgroundColor} />
            </div>
        )
    }
}

export default QuotesWrapper;



//// BUGS TO FIXED //////
// 1. amélioration : couleur random avec un seuil de luminosité maximale
// 2. fondu transition pour l'apparition de la phrase et de l'auteur aléatoire



////// BUGS FIXED //////
//bug : de temps en temps, la méthode randomNumb de la fonction randomQuoteAndAuthor dans QuoteBox crash.
// 3. Au chargement: faire apparaître une citation aléatoirement.


//1. Algorithme en cours de création pour générer une couleur avec une luminosité mini :
// newBackgroundColor = () => {
//     function getColor() {
//         return "hsl(" + 360 * Math.random() + ',' +
//             (25 + 70 * Math.random()) + '%,' +
//             (85 + 10 * Math.random()) + '%)';
//     }
//     console.log(getColor())
//     this.setState({
//         randomColor: this.getColor()
//     })
// }