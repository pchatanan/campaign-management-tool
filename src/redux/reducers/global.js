import ACT_TYPES from "../actions";

export const AUTH_STATES = {
  AUTHENTICATING: 'AUTHENTICATING',
  NONAUTH: 'NONAUTH',
  AUTH: 'AUTH'
}

const defaultState = {
  authState: {
    user: null,
    state: AUTH_STATES.AUTHENTICATING
  }
}

const global = (state = defaultState, action) => {
  switch (action.type) {
    case ACT_TYPES.SET_AUTH_STATE:
      return {
        ...state,
        authState: {
          user: action.user,
          state: action.state
        }
      }
    default:
      return state
  }
}

export default global