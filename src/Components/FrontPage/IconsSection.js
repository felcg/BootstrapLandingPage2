import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => (
  <section className="page-section" id="services">
    <Container>
      <div className="text-center">
        <h2 className="section-heading text-upper">SERVIÇOS</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <Row>
        <Col md={4}>
          <div className="mx-auto mb-5 mb-lg-0 mb-lg-3 text-center">
            <div className="fa-stack fa-4x">
              <FontAwesomeIcon icon={['fas', 'circle']} className="fa-stack-2x txt-primary" />
              <FontAwesomeIcon icon={['fas', 'shopping-cart']} className="fa-stack-1x fa-inverse" />
            </div>
            <h4 className="my-3">E-Commerce</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="mx-auto mb-5 mb-lg-0 mb-lg-3 text-center">
            <div className="fa-stack fa-4x">
              <FontAwesomeIcon icon={['fas', 'circle']} className="fa-stack-2x txt-primary" />
              <FontAwesomeIcon icon={['fas', 'laptop']} className="fa-stack-1x fa-inverse" />
            </div>
            <h4 className="my-3">Página Responsiva</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="mx-auto mb-5 mb-lg-0 mb-lg-3 text-center">
            <div className="fa-stack fa-4x">
              <FontAwesomeIcon icon={['fas', 'circle']} className="fa-stack-2x txt-primary" />
              <FontAwesomeIcon icon={['fas', 'lock']} className="fa-stack-1x fa-inverse" />
            </div>
            <h4 className="my-3">Segurança Digital</h4>
            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Services
