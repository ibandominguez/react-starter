import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MyComponent } from '../components'

export default connect((state, props) => ({
  myReducer: state.myReducer
}))((props) => (
  <MyComponent
    title={props.myReducer.title}
    color={props.myReducer.color}
    onClick={(component) => props.dispatch({
      type: 'CHANGE_COLOR',
      color: component.color === 'steelblue' ? 'lightcoral' : 'steelblue'
    })}
  />
))
