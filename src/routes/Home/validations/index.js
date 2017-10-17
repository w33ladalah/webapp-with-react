const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.name) {
    errors.name = 'Required'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less'
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more'
  }

  if (!values.confirm_password) {
    errors.confirm_password = 'Required'
  } else if (values.confirm_password.length > 15) {
    errors.confirm_password = 'Must be 15 characters or less'
  }  else if (values.confirm_password.length < 6) {
    errors.confirm_password = 'Must be 6 characters or more'
  }else if (values.password !== values.confirm_password) {
    errors.confirm_password = 'Password does not same'
  }

  return errors
}

export default validate
