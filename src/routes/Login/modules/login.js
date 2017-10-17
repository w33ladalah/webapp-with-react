// ------------------------------------
// Constants
// ------------------------------------
export const DO_LOGIN = 'DO_LOGIN'

// ------------------------------------
// Actions
// ------------------------------------
export function handleSubmit (values) {
  return {
    type    : DO_LOGIN,
    payload : values
  }
}

export const actions = {
  handleSubmit
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DO_LOGIN]: (state, action) => {
    return state + action.payload
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  email: '',
  password: ''
}
export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
