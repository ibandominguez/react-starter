import { createStore } from 'redux'

const initialState = {
  test: 'test'
}

export default createStore((state = initialState, action) => {
  switch (action.type) {
    case 'ACTION':
      return state
    default:
      return state
  }
})
