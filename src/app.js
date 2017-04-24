import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import TestContainer from './containers/TestContainer'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={TestContainer} />
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
