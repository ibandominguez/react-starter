import { createStore } from 'redux'
import cards from '../../src/reducers/cards'

describe('Cards reducer', () => {
  let cardsReducer

  beforeEach(() => {
    cardsReducer = createStore(cards)
  })

  it('should contain a list of type array', () => {
    expect(cardsReducer.getState().list).toBeInstanceOf(Array)
  })

  it('should add an item to the list', () => {
    const id = Date.now()

    expect(cardsReducer.getState().list.length).toBe(0)

    cardsReducer.dispatch({
      type: 'ADD_CARD',
      card: { id, title: 'Test' }
    })

    expect(cardsReducer.getState().list.length).toBe(1)
  })

  it('should remove an item from the list', () => {
    const id = Date.now()

    expect(cardsReducer.getState().list.length).toBe(0)

    cardsReducer.dispatch({
      type: 'ADD_CARD',
      card: { id, title: 'Test' }
    })

    expect(cardsReducer.getState().list.length).toBe(1)

    cardsReducer.dispatch({
      type: 'REMOVE_CARD',
      id
    })

    expect(cardsReducer.getState().list.length).toBe(0)
  })
})
