const initialState = {
  title: 'React Starter',
  color: 'steelblue'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.color
      }
    default:
      return state
  }
}
