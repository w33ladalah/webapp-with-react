const validate = values => {
  const errors = {}

  if (!values.password1) {
    errors.password1 = 'Required'
  } else if (values.password1.length > 15) {
    errors.password1 = 'Must be 15 characters or less'
  } else if (values.password1.length < 6) {
    errors.password1 = 'Must be 6 characters or more'
  }

  if (!values.password2) {
    errors.password2 = 'Required'
  }

  if(values.password2 != values.password1){
  	 errors.password2 = 'Password tidak sama'
  }

  return errors
}

export default validate
