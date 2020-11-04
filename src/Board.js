import React from 'react';
import Card from './Card.js';

import { config } from './config'

import { withRouter } from 'react-router-dom'
class Board extends React.Component {
  constructor(props) {
    super(props)
    const deck = config.DECK
      .concat(config.DECK)
      .sort(() => Math.random() - 0.5)
      .map(f => {
        return {
          content: f,
          faceUp: false,
        }
      })
    this.state = {
      deck: deck,
      score: 0,
      minutes: config.MINUTE,
      seconds: config.SECOND,
      isStart: true,
      isTimeOver: false,
      firstCard: null,
      isWin: false,
      seeSecond: config.seeSecond
    }
  }
  getDeck = () => {
    const deck = config.DECK
      .concat(config.DECK)
      .sort(() => Math.random() - 0.5)
      .map(f => {
        return {
          content: f,
          faceUp: true,
        }
      })
    return deck
  }
  componentDidMount() {
    this.seeCard()
  }
  addScore = (score) => {
    let newScore = this.state.score + score
    if (newScore === config.FINALSCORE) {

      this.setState({ score: this.state.score + score })
      this.win()
    } else {
      this.setState({ score: this.state.score + score })
    }
  }
  countdown = () => {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          this.setState({ isTimeOver: true })
          clearInterval(this.myInterval)
          this.props.history.push(`/score/${this.state.score}`)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.myInterval)
  }
  start = (deck) => {
    // this.setState({ minutes: config.MINUTE, seconds: config.SECOND, score: 0 })
    // let deck = this.getDeck()
    // this.setState({ deck: deck })
    for (let i = 0; i < deck.length; i++) {
      deck[i].faceUp = false
    }
    this.setState({ deck: deck })
    this.countdown();
    // setTimeout(() => {
    //   for (let i = 0; i < deck.length; i++) {
    //     deck[i].faceUp = false
    //   }
    //   this.setState({ deck: deck })
    //   this.countdown();
    // }, config.seeSecond)
  }
  seeCard = () => {
    this.setState({ minutes: config.MINUTE, seconds: config.SECOND, score: 0 })
    let deck = this.getDeck()
    this.setState({ deck: deck })
    this.myInterval = setInterval(() => {
      const { seeSecond } = this.state

      if (seeSecond > 0) {
        this.setState(({ seeSecond }) => ({
          seeSecond: seeSecond - 1
        }))
      }
      if (seeSecond === 0) {
        clearInterval(this.myInterval)
        this.start(deck)

      }
    }, 1000)
  }
  restart = async () => {
    this.setState({ minutes: config.MINUTE, seconds: config.SECOND, score: 0 })
    let deck = this.getDeck()
    this.setState({ deck: deck })
    setTimeout(() => {
      for (let i = 0; i < deck.length; i++) {
        deck[i].faceUp = false
      }
      this.setState({ deck: deck })
      this.countdown();
    }, config.seeSecond)
  }
  win = async () => {
    setTimeout(() => {
      this.props.history.push(`/score/${this.state.score}`)
      clearInterval(this.myInterval)
    }, 500)
  }
  flipCardTo = (cardIdx, faceUp) => {
    this.setState({
      deck: this.state.deck.map((f, i) => {
        if (i === cardIdx) {
          return {
            content: f.content,
            faceUp: !f.faceUp,
          }
        } else {
          return f;
        }
      })
    })
  }

  flip = (cardIdx) => {
    if (this.state.firstCard === null) {
      this.setState({ firstCard: cardIdx });
    } else {
      const firstCardContent = this.state.deck[this.state.firstCard].content;
      const secondCardContent = this.state.deck[cardIdx].content;
      if (firstCardContent === secondCardContent) {
        this.setState({ firstCard: null });
        this.addScore(config.SCORE)
      } else {
        setTimeout(() => {
          this.flipCardTo(this.state.firstCard, false)
          this.flipCardTo(cardIdx, false)
          this.setState({ firstCard: null });
        }, config.cardFlipBack)
      }
    }

    this.flipCardTo(cardIdx, !this.state.deck[cardIdx].faceUp)
  }

  render() {
    const { minutes, seconds, score, seeSecond } = this.state
    return (
      <div className="background" style={{ overflowY: 'hidden' }}>
        <img src={process.env.PUBLIC_URL + `/image/bg.svg`} alt="bg" className="background-image" />
        <img src={process.env.PUBLIC_URL + `/image/board.svg`} alt="board" style={{ zIndex: 1, position: 'absolute', height: '99vh' }} />
        <div style={{ zIndex: 20, width: '1560px', margin: '135px 100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            width: '90%'
          }}>
            <div style={{ backgroundColor: 'white', padding: '0px 10px', borderRadius: 10 }}><h1 style={{ lineHeight: 0, fontSize: 50 }}>TIME : {minutes} : {seeSecond === 0 ? seconds : seeSecond}</h1></div>
            <div style={{ backgroundColor: 'white', padding: '0px 10px', borderRadius: 10 }}><h1 style={{ lineHeight: 0, fontSize: 50 }}>SCORE : {score}</h1></div>
          </div>
          <div style={{ zIndex: 5, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: '7vh' }}>
            {this.state.deck.map((f, i) => {
              return (<Card flip={() => { this.flip(i) }}
                content={f.content}
                faceUp={f.faceUp} />)
            })}

          </div>
        </div>
      </div >
    )
  }
}

export default withRouter(Board);
