import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import {
  Col,
  FormGroup,
} from '@sketchpixy/rubix'
import validate from '../validations'
import fieldComponent from '../../../components/form/InputText'

export const ResetPasswordForm = ({ handleSubmit, pristine, submitting }) => (
  <form className="form-horizontal" role="form" onSubmit={handleSubmit}>
    <FormGroup className="float">
      <Col
        md={12}>
        <Field
          type="password"
          component={fieldComponent}
          name="password1"
          id="password1"
          label="Masukkan Password Baru"
        />
      </Col>
    </FormGroup>

    <FormGroup className="float">
      <Col
        md={12}>
        <Field
          type="password"
          component={fieldComponent}
          name="password2"
          id="password2"
          label="Ketik Ulang Password Baru"
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
          Reset Password
        </button>
      </Col>
    </FormGroup>
  </form>
)



export default reduxForm({
  form: 'ResetPasswordForm',
  validate
})(ResetPasswordForm)
