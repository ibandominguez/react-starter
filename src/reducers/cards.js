const initialState = {
  list: []
}

export default function cards(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        list: state.list.concat(action.card)
      }
    case 'REMOVE_CARD':
      return {
        ...state,
        list: state.list.filter((card) => card.id !== action.id)
      }
    default:
      return state
  }
}
