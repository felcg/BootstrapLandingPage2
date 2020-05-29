/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <div className="footer py-4">
    <Container>
      <Row className="align-items-center">
        <Col lg={4} className="text-lg-left">
          Seu site © Todos Direitos Reservados.
        </Col>
        <Col lg={4} className="my-3 my-lg-0">
          <a className="btn btn-dark btn-social mx-2" href="#!">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>

          <a className="btn btn-dark btn-social mx-2" href="#!">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </a>

          <a className="btn btn-dark btn-social mx-2" href="#!">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
        </Col>
        <Col lg={4} className="text-lg-right">
          <a className="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer
