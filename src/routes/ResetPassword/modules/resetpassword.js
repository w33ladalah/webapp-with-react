// ------------------------------------
// Constants
// ------------------------------------
export const DO_RESETPASSWORD = 'DO_RESETPASSWORD'

// ------------------------------------
// Actions
// ------------------------------------
export function handleSubmit (values) {
  return {
    type    : DO_RESETPASSWORD,
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
  [DO_RESETPASSWORD]: (state, action) => {
    console.log(state)
    console.log(action)
    return state + action.payload
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  password1: '',
  password2: ''
}
export default function resetPasswordReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
