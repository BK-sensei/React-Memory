import React, { Component } from 'react';
import '../card-style.css'


class Card extends Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         isFlipped: false,
    //         flipCard : []
    //     }
    //     this.handleCardClick = this.handleCardClick.bind(this)
    // }
    // handleTwoCardsFlip () {
    //    
    // }

    render() {
        // console.log(this.props)
        // const {isFlipped} = this.state
        return (
            <div className="container-op col-1">
                <div className={`card-op d-flex ${this.props.isFlipped ? "is-flipped" : "" } `} style={{transform: `rotate3d(0, 0, 1, ${this.props.randomRotate}deg)` }} onClick={this.props.onClick}>
                    <div className="recto">
                        <div className="card card-front flip">
                            <div style={{backgroundImage: `url('../op-image/${this.props.image}.png')`}} className="card-img-top characterCard" alt="One Piece Character"></div>
                            <div className="card-body">
                                <h4 className="card-title text-center fw-bold">{this.props.name}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="verso flip">
                        <div style={{backgroundImage: `url('../op-image/op-back.png')`}} className="card-img-top img-fluid card-back" alt="Back Card"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

