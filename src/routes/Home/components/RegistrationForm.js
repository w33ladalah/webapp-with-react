import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {
  Col,
  FormGroup,
} from '@sketchpixy/rubix'
import validate from '../validations'
import inputText from '../../../components/form/InputText'

export const RegistrationForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <form className="form-horizontal" role="form" onSubmit={handleSubmit}>
    <FormGroup className="float">
      <Col
        md={12}>
        <Field
          type="text"
          component={inputText}
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
          type="text"
          component={inputText}
          name="name"
          id="name"
          label="Fullname"
        />
      </Col>
    </FormGroup>

    <FormGroup className="float">
      <Col
        md={12}>
        <Field
          type="password"
          component={inputText}
          name="password"
          id="password"
          label="Password"
        />
      </Col>
    </FormGroup>

    <FormGroup className="float">
      <Col
        md={12}>
        <Field
          type="password"
          component={inputText}
          name="confirm_password"
          id="confirm_password"
          label="Confirm Password"
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
          Create Account
        </button>
        <button type="button"
          className="btn btn-default"
          disabled={pristine || submitting}
          onClick={reset}>
          Reset
        </button>
      </Col>
    </FormGroup>
  </form>
)


export default reduxForm({
  form: 'RegistrationForm',
  validate
})(RegistrationForm)
