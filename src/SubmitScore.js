import React from 'react'

import { withRouter } from 'react-router-dom'

class SubmitScore extends React.Component {
  getBoard = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="background">
        <img src={process.env.PUBLIC_URL + `/image/bg.svg`} alt="bg" className="background-image" />
        <img src={process.env.PUBLIC_URL + `/image/board-opacity.svg`} alt="board-bg" style={{ position: 'absolute', zIndex: 1, width: '1750px' }} />
        <div style={{ zIndex: 2, height: '1000px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: 120, lineHeight: 0 }}>TOTAL SCORE</h1>
          <h1 style={{ fontSize: 100, color: 'red', lineHeight: 0 }}>{this.props.match.params.score} POINTS</h1>
        </div>
        <img src={process.env.PUBLIC_URL + `/image/button-play.png`} className="blink-image" alt='button' onClick={this.getBoard} style={{ position: 'absolute', marginTop: '700px' }} />
      </div>
    )
  }
}

export default withRouter(SubmitScore)