import React, { useState } from 'react'
import {
  Container, Form, Row, Col,
} from 'react-bootstrap'

const Contact = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <section className="page-section" id="contact">
      <Container>
        <div className="text-center">
          <h2 className="section-heading text-uppercase mb-4">FALE CONOSCO</h2>
        </div>
        <Form id="contactForm" name="sentMessage" noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="align-items-stretch mb-5">
            <Col md={6}>
              <Form.Group>
                <Form.Control id="name" type="text" placeholder="Seu nome" required />
                <Form.Control.Feedback type="invalid" className="custom-invalid-feedback">
                  Por favor nos diga seu nome.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Control id="email" type="email" placeholder="Seu email" required />
                <Form.Control.Feedback type="invalid" className="custom-invalid-feedback">
                  Por favor nos diga seu email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-md-0">
                <Form.Control id="phone" type="tel" placeholder="Seu telefone" required />
                <Form.Control.Feedback type="invalid" className="custom-invalid-feedback">
                  Por favor nos diga seu número de telefone.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="form-group-textarea mb-md-0">
                <Form.Control as="textarea" rows="3" id="message" placeholder="Sua mensagem" required />
                <Form.Control.Feedback type="invalid" className="custom-invalid-feedback">
                  Por favor nos diga sua mensagem.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <div className="text-center">
            <div id="success" />
            <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
          </div>
        </Form>
      </Container>
    </section>

  )
}

export default Contact
