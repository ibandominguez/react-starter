import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardBox, AddCard } from '../components'
import { Grid, Row, Col, Panel } from 'react-bootstrap'

const styles = {
  cards: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
}

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
      <Grid>
        <Row>
          <Col xs={10} xsOffset={1}>
            <Panel header='Home Container'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <AddCard onAdd={this.addCard.bind(this)} />

              <div style={styles.cards}>
                {this.props.cards.map((card, index) => (
                  <CardBox key={index} {...card} onClick={console.log} />
                ))}
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default connect((state, props) => ({
  cards: state.cards.list
}))(Home)
