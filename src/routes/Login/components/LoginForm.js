import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import {
  Col,
  FormGroup,
} from '@sketchpixy/rubix'
import validate from '../validations'
import fieldComponent from '../../../components/form/InputText'

export const LoginForm = ({ handleSubmit, pristine, submitting }) => (
  <form className="form-horizontal" role="form" onSubmit={handleSubmit}>
    <FormGroup className="float">
      <Col
        md={12}>
        <Field
          type="text"
          component={fieldComponent}
          name="email"
          id="email"
          label="Email"
        />
      </Col>
    </FormGroup>

    <FormGroup className="float">
      <Col
        md={12}>
        <Field
          type="password"
          component={fieldComponent}
          name="password"
          id="password"
          label="Password"
        />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col
        md={12}
        mdOffset={4}>
        <button
          type="submit"
          className="btn btn-success"
          disabled={submitting}
          style={{ marginRight: '15px' }}>
          Sign In
        </button>
        <Link to="/forgot-password">Forgot your password?</Link>
      </Col>
    </FormGroup>
  </form>
)

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm)
