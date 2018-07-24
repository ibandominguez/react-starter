import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { MyContainer } from './containers'
import * as reducers from './reducers'

const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <MyContainer />
  </Provider>,
  document.getElementById('app')
)
