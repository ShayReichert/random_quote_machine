import React, { Component } from 'react'

class Buttons extends Component {

    //Import 2 props in one function for onClick' event :
    randomClickandOnClick = () => {
        this.props.randomclick();
        this.props.onclick();
    }

  


    render() {
        const { randomColor, randomSentence, randomAuthor } = this.props;
        return (
            <div className="button">
                <a href={`https://twitter.com/intent/tweet?text="${randomSentence}"%20-%20${randomAuthor}&hashtags=fakequotes`}  target="_blank" rel="noopener noreferrer" style={{backgroundColor: randomColor}} id="tweet-quote"><i className="fab fa-twitter"></i></a>
                <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=fakequotes&caption=${randomAuthor}&content="${randomSentence}"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} target="_blank" rel="noopener noreferrer" style={{backgroundColor: randomColor}} id="fb-btn"><i className="fab fa-tumblr"></i></a>
                <button style={{backgroundColor: randomColor}}  onClick={this.randomClickandOnClick} className="btn-new-sentence" id="new-quote">Nouvelle Phrase</button>
            </div>
        )
    }
}
export default Buttons;