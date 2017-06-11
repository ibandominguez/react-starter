import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddCard extends Component {
  static get propTypes() {
    return {
      onAdd: PropTypes.func.isRequired
    }
  }

  static get colors() {
    return [
      'lightblue',
      'steelblue',
      'lightcoral'
    ]
  }

  constructor(props) {
    super(props)
    this.state = { title: null }
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    this.props.onAdd(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <select required name={'color'} onChange={this.handleInputChange.bind(this)}>
          <option value={''}>Select a color:</option>
          {AddCard.colors.map((color, index) => <option key={index} value={color}>{color}</option>)}
        </select>
        <input required placeholder={'Title'} type={'text'} name={'title'} onChange={this.handleInputChange.bind(this)} />
        <input type={'submit'} />
      </form>
    )
  }
}
