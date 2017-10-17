// ------------------------------------
// Constants
// ------------------------------------
export const DO_FORGOTPASSWORD = 'DO_FORGOTPASSWORD'

// ------------------------------------
// Actions
// ------------------------------------
export function handleSubmit (values) {
  return {
    type    : DO_FORGOTPASSWORD,
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
  [DO_FORGOTPASSWORD]: (state, action) => {
    console.log(state)
    console.log(action)
    return state + action.payload
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  email: ''
}
export default function forgotPasswordReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
