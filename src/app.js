import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { Home, NotFound } from './containers'
import configureStore from './store/configure'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
