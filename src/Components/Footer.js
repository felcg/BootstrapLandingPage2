/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <div className="footer bg-light">
    <Container>
      <Row>
        <Col lg={6} className="h-100 text-center text-lg-left my-auto">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <a href="#">Sobre nós</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#">Contato</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#">Termos de Uso</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#">Política de Privacidade</a>
            </li>
          </ul>
          <p className="text-muted small mb-4 mb-lg-0">© Your Website 2020. Todos Direitos Reservados.</p>
        </Col>
        <Col lg={6} className="h-100 text-center text-lg-right my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mr-3">
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
              </a>
            </li>
            <li className="list-inline-item mr-3">
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer
