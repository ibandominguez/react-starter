import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Hello from './components/Hello'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Hello} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
