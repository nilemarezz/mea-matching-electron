import React from 'react';
import Home from './Home'
import Board from './Board'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Submitscore from './SubmitScore'
class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <MockNav /> */}
        < Switch >
          <Route path="/" exact strict >
            <Home />
          </Route>
          <Route path="/board" exact strict >
            <Board />
          </Route>
          <Route path="/score/:score" exact strict >
            <Submitscore />
          </Route>
        </ Switch>
      </Router>
    )
  }
}

export default App