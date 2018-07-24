import { createStore } from 'redux'

// This is just a quick example on how to test
// a reducer, import reducers from your project
// and get your hands on testing

describe('MyReducer Tests', () => {
  let myReducer

  beforeEach(() => {
    myReducer = createStore((
      state = 0,
      action
    ) => {
      switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
        default: return state
      }
    })
  })

  it('should be zero on start', () => {
    expect(myReducer.getState()).toBe(0)
  })

  it('should increment', () => {
    myReducer.dispatch({ type: 'INCREMENT' })
    expect(myReducer.getState()).toBe(1)
  })

  it('should decrement', () => {
    myReducer.dispatch({ type: 'DECREMENT' })
    expect(myReducer.getState()).toBe(-1)
  })
})
