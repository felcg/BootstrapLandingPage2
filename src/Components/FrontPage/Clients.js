import React from 'react'
import {
  Container, Row, Col,
} from 'react-bootstrap'


const Clients = () => (
  <div className="py-5">
    <Container>
      <Row>
        <Col md={3} sm={6} className="my-3">
          <img className="img-fluid d-block mx-auto" src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/logos/envato.jpg" alt="" />
        </Col>
        <Col md={3} sm={6} className="my-3">
          <img className="img-fluid d-block mx-auto" src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/logos/designmodo.jpg" alt="" />
        </Col>
        <Col md={3} sm={6} className="my-3">
          <img className="img-fluid d-block mx-auto" src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/logos/themeforest.jpg" alt="" />
        </Col>
        <Col md={3} sm={6} className="my-3">
          <img className="img-fluid d-block mx-auto" src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/logos/creative-market.jpg" alt="" />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Clients
