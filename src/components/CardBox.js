import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'

const styles = {
  container: {
    padding: '20px',
    color: '#555',
    backgroundColor: '#eee',
    margin: '5px',
    ':hover': {
      opacity: 0.5
    }
  }
}

class CardBox extends Component {
  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
      color: PropTypes.string,
      onClick: PropTypes.func.isRequired
    }
  }

  getStyles() {
    return Object.assign({}, styles.container, {
      color: this.props.color || styles.container.color,
      backgroundColor: this.props.backgroundColor || styles.container.backgroundColor
    })
  }

  handleOnClick() {
    const { title, color } = this.props

    this.props.onClick({ title, color })
  }

  render() {
    return (
      <div style={this.getStyles()} onClick={this.handleOnClick.bind(this)}>
        {this.props.title}
      </div>
    )
  }
}

export default Radium(CardBox)
