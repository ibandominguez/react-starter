import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestComponent from '../components/TestComponent'

class TestContainer extends Component {
  render() {
    return (
      <div>
        <h2>Test Container</h2>
        <TestComponent />

        {Object.keys(this.props).map((prop, index) => (
          <p key={index}>{prop}</p>
        ))}
      </div>
    )
  }
}

export default connect((state, props) => ({
  test: state.test
}))(TestContainer)
