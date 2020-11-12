import React from 'react';
import './Card.css';
import { getColor } from './config'
class Card extends React.Component {
  render() {
    let content;
    if (this.props.faceUp) {
      content = this.props.content;
    } else {
      content = ''
    }
    return (
      <div onClick={this.props.faceUp ? "" : this.props.flip} className={`Card ${this.props.faceUp ? 'face-up' : ''}`} style={{ backgroundColor: this.props.faceUp ? getColor(content) : 'white' }}>
        {this.props.faceUp ? <img src={process.env.PUBLIC_URL + `/card/card-${content}.svg`} alt="card" style={{ transform: 'rotateY(-180deg)', width: '80px' }} /> : <img src={process.env.PUBLIC_URL + `/image/logo-mea.svg`} alt="logo" style={{ width: '80px' }} />}
      </div>
    )
  }
}

export default Card;
