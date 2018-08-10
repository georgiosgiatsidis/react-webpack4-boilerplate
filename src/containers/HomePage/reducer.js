const initialState = {};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case 'HOME':
      return state
    default:
      return state
  }
}
