import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import configureStore from './store/configure'
import TestContainer from './containers/TestContainer'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={TestContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
