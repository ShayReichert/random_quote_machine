import React, { Component } from 'react'

class Buttons extends Component {

    //Import of 2 props in one function for onClick' event :
    randomClickandOnClick = () => {
        this.props.randomclick();
        this.props.onclick();
    }

    render() {
        const { randomColor } = this.props;
        return (
            <div className="button">
                <button style={{backgroundColor: randomColor}} id="twitter-btn"><a href="twitter.com/intent/tweet"><i className="fab fa-twitter"></i></a></button>
                <button style={{backgroundColor: randomColor}} id="fb-btn"><a href="facebook.com"><i className="fab fa-facebook-f"></i></a></button>
                <button style={{backgroundColor: randomColor}}  onClick={this.randomClickandOnClick} className="btn-new-sentence" >Nouvelle Phrase</button>
            </div>
        )
    }
}
export default Buttons;