// TODO: Will be implemented later

export const validations = {
  email: {
    validateOnBlur: true,
    required: true,
    minLength: 5,
    email: true
  },
  fullname: {
    validateOnBlur: true,
    required: true,
    minLength: 5
  },
  password: {
    validateOnBlur: true,
    required: true,
    minLength: 5
  }
}

export default {
  validations
}
