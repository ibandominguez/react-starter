import React, { Component } from 'react'

export default class TestComponent extends Component {
  static get propTypes() {
    return {
      style: React.PropTypes.object,
      onComponentClick: React.PropTypes.func,
      test: React.PropTypes.bool.isRequired
    }
  }

  render() {
    return (
      <div style={this.props.style} onClick={this.props.onComponentClick}>
        <h3>TestComponent <span style={{ color: this.props.test ? 'green' : 'red' }}>TEST BOOLEAN</span></h3>
        <img style={{ maxWidth: '100%', width: '100%' }} src={require('../images/test.png')} />
      </div>
    )
  }
}
