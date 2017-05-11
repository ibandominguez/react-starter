import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import TestContainer from './containers/TestContainer'
import reducer from './reducer'
import './styles/app.less'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={TestContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
