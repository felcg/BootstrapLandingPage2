import React from 'react'
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap'

const CallToAction = () => (
  <section className="call-to-action text-white text-center">
    <Container>
      <Row>
        <Col xl={9} className="mx-auto">
          <h1 className="mb-5">Pronto para começar? Se inscreva!</h1>
        </Col>
        <Col md={10} lg={8} xl={7} className="mx-auto">
          <Form>
            <Form.Row>
              <Col md={9} className="col-12 mb-2 mb-md-0">
                <Form.Control size="lg" type="email" placeholder="Digite seu email..." />
              </Col>
              <Col md={3}>
                <Button variant="primary" size="lg" block>Inscrever</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>
)

export default CallToAction
