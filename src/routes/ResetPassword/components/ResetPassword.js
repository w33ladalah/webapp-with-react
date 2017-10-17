import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
} from '@sketchpixy/rubix';

import ResetPasswordForm from './ResetPasswordForm'

export const ResetPasswordView = ({ handleSubmit }) => (
  <section id="reset-password" className="section section--secondary pos-relative style-right bg-light">
    <Helmet title="Reset Password Anda | WebAPP" />
    <div className="row">
      <Col md={5}>
        <div className="boxed boxed-lg boxed--aside text-center">
          <div className="boxed-header max-w-sm mx-auto">
            <h3 className="h2 boxed-title text-gray">Reset Password</h3>
            <div className="boxed-content">Silahkan masukkan password anda yang baru.</div>
          </div>
          <div className="boxed-body w-100 text-left">
            <div className="container">
              <Row>
                <Col
                  md={12}
                  mdOffset={2}>
                  <ResetPasswordForm onSubmit={handleSubmit}/>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Col>
      <Col md={7} className="section-content-part--media">
        <img src="http://placehold.it/772x600" className="js-object-fit object-fit--cover ready" />
      </Col>
    </div>
  </section>
)

ResetPasswordView.propTypes = {
  handleSubmit: PropTypes.func
}

export default ResetPasswordView
