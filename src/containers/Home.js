import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardBox, AddCard } from '../components'

class Home extends Component {
  addCard(card) {
    this.props.dispatch({
      type: 'ADD_CARD',
      card: Object.assign({}, card, {
        id: Date.now()
      })
    })
  }

  render() {
    return (
      <div>
        <AddCard onAdd={this.addCard.bind(this)} />

        <div>
          {this.props.cards.map((card, index) => (
            <CardBox key={index} {...card} onClick={console.log} />
          ))}
        </div>
      </div>
    )
  }
}

export default connect((state, props) => ({
  cards: state.cards.list
}))(Home)
