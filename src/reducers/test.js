const initialState = {
  boolean: true
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEST_BOOLEAN':
      return Object.assign({}, state, { boolean: action.boolean })
    default:
      return state
  }
}
