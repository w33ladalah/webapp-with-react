import userService from '../../../services/UserService'

// ------------------------------------
// Constants
// ------------------------------------
export const REGISTRATION_SUBMIT = 'REGISTRATION_SUBMIT'

// ------------------------------------
// Actions
// ------------------------------------
export function handleSubmit (values) {
  return {
    type    : REGISTRATION_SUBMIT,
    payload : {
      user: {
        email: values.email,
        name: values.name,
        password: values.password,
      },
    },
  }
}

export const actions = {
  handleSubmit: (values) => handleSubmit(values)
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REGISTRATION_SUBMIT]: async (state, action) => {
    const response = await userService.register(action.payload)

    if (errors in response) {
      return state + response.errors
    }

    return state + action.payload
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function registrationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
