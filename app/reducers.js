import {
  SET_USER_NAME,
  SET_MESSAGE,
  SET_VIEW,
  SET_MESSAGES,
  FETCH_MESSAGE,
  FETCH_MESSAGE_FAILED
} from './actions';

function rnWorkshop(state = {}, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return Object.assign({}, state, { username: action.username })
    case SET_MESSAGES:
      return Object.assign({}, state, { messages: action.messages })
    case SET_MESSAGE:
      return Object.assign({}, state, { message: action.message })
    case SET_VIEW:
      return Object.assign({}, state, { viewName: action.viewName })
    case FETCH_MESSAGE:
      return Object.assign({}, state, { isFetchingMessages: true })
    case FETCH_MESSAGE_FAILED:
      return Object.assign({}, state, { isFetchingMessages: false })
    default:
      return state
  }
}

export default rnWorkshop;
