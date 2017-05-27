import React, { Component } from 'react'

export default class TestComponent extends Component {
  static get propTypes() {
    return {
      style: React.PropTypes.object,
      onComponentClick: React.PropTypes.func,
      test: React.PropTypes.bool.isRequired
    }
  }

  get styles() {
    return {
      container: Object.assign({}, this.props.style),
      image: {
        maxWidth: '100%',
        width: '100%'
      }
    }
  }

  getFontColor() {
    const color = this.props.test ? 'green' : 'red'
    return { color }
  }

  render() {
    return (
      <div style={this.styles.container} onClick={this.props.onComponentClick}>
        <h3>TestComponent <span style={this.getFontColor()}>TEST BOOLEAN</span></h3>
        <img style={this.styles.image} src={require('../images/test.png')} />
      </div>
    )
  }
}
