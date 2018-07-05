import * as actions from '../actions'

const initialState = {
  items: [],
  item: {}
}

function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }

    case actions.NEW_POST:
      return {
        ...state,
        item: action.payload
      }

    default:
      return state
  }
}

export default postReducer
