import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
} from '@sketchpixy/rubix';
import RegistrationForm from './RegistrationForm'

export const HomeView = ({handleSubmit}) => (
  <section id="create-an-account" className="section section--secondary pos-relative style-right bg-light">
    <Helmet title="Create New Account | WebAPP" />
    <div className="row">
      <Col md={5}>
        <div className="boxed boxed-lg boxed--aside text-center">
          <div className="boxed-header max-w-sm mx-auto">
            <h3 className="h2 boxed-title text-gray">Create an account</h3>
            <div className="boxed-content">Start by filling in some simple information.</div>
          </div>
          <div className="boxed-body w-100 text-left">
            <div className="container">
              <Row>
                <Col
                  md={12}
                  mdOffset={2}>
                  <RegistrationForm onSubmit={handleSubmit}/>
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

HomeView.propTypes = {
  handleSubmit: PropTypes.func
}

export default HomeView
