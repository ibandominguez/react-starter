import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestComponent from '../components/TestComponent'

class TestContainer extends Component {
  render() {
    return (
      <div className='container' style={{ fontFamily: 'Helvetica, sans-serif' }}>
        <h2>Test Container</h2>

        <p>Sample component</p>

        <TestComponent
          style={{ background: '#eee', padding: '15px' }}
          test={this.props.boolean}
          onComponentClick={() => this.props.dispatch({
            type: 'SET_TEST_BOOLEAN',
            boolean: !this.props.boolean
          })}
        />
      </div>
    )
  }
}

export default connect((state, props) => ({
  boolean: state.test.boolean
}))(TestContainer)
