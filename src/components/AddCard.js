import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

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
    this.state = { title: '' }
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
        <FormGroup controlId="colorSelect">
          <FormControl componentClass="select" placeholder="select" required name={'color'} onChange={this.handleInputChange.bind(this)}>
            <option value={''}>Select a color:</option>
            {AddCard.colors.map((color, index) => <option key={index} value={color}>{color}</option>)}
          </FormControl>
        </FormGroup>
      <FormGroup controlId="return">
        <FormControl
            type="text"
            value={this.state.title}
            name={'title'}
            placeholder="Enter text"
            onChange={this.handleInputChange.bind(this)}
          />
          <Button style={{ marginTop: 10 }} type={'submit'} bsStyle="primary">Add</Button>
      </FormGroup>
      </form>
    )
  }
}
