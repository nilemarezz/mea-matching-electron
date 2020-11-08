import React from 'react';
import './App.css';
import "./Home.css"
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
  getBoard = () => {
    this.props.history.push('/board')
  }
  render() {
    return (
      <>
        <img src={process.env.PUBLIC_URL + `/card/MEA-Love.svg`} alt="card" width="250vh" style={{ position: 'absolute', zIndex: 20, top: '45vh', left: '21vh' }} />
        <div className="background">

          <img src={process.env.PUBLIC_URL + `/card/card-2.svg`} alt="card" width="180vh" style={{ position: 'absolute', zIndex: 20, top: '43vh', right: '21vh' }} />
          <img src={process.env.PUBLIC_URL + `/image/bg.svg`} alt="bg" className="background-image" style={{ position: 'fixed' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
            <img src={process.env.PUBLIC_URL + `/image/title.svg`} alt="bg" className="title-image" />
            <img src={process.env.PUBLIC_URL + `/image/button-start.png`} className="blink-image" alt='button' onClick={this.getBoard} />
          </div>
        </div>
      </>
    );

  }
}

export default withRouter(Home);
