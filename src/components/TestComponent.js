import React, { Component } from 'react'

export default class TestComponent extends Component {
  render() {
    return (
      <div>
        <h3>TestComponent</h3>
        <img src={require('../images/test.png')} />
      </div>
    )
  }
}
