import React from 'react'

import { withRouter } from 'react-router-dom'

class SubmitScore extends React.Component {
  getBoard = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="background">
        <img src={process.env.PUBLIC_URL + `/image/bg.svg`} alt="bg" className="background-image" style={{ position: 'fixed' }} />
        <img src={process.env.PUBLIC_URL + `/image/board-opacity.svg`} alt="board-bg" style={{ position: 'absolute', zIndex: 1, width: '1200px' }} />
        <div style={{ zIndex: 2, height: '700px', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: 80, lineHeight: 0 }}>TOTAL SCORE</h1>
          <h1 style={{ fontSize: 80, color: 'red', lineHeight: 0 }}>{this.props.match.params.score} POINTS</h1>
        </div>
        <img src={process.env.PUBLIC_URL + `/image/button-play.png`} className="blink-image" alt='button' onClick={this.getBoard} style={{ position: 'absolute', marginTop: '460px' }} />
      </div>
    )
  }
}

export default withRouter(SubmitScore)