import React from 'react'
import {
  Modal, Button, Image, Col, Row, Container,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Modal1 = ({ visible, toggleModal }) => (
  <Modal show={visible} onHide={() => toggleModal()} className="portfolio-modal">
    <Modal.Header className="modal-custom-header" closeButton />
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <Modal.Body>
            <h2 className="text-uppercase">Project Name</h2>
            <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
            <Image className="img-fluid d-block mx-auto" src="https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <p>Use this area to describe your project.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Est blanditiis dolorem culpa incidunt minus dignissimos
              deserunt repellat aperiam quasi sunt officia expedita
              beatae cupiditate, maiores repudiandae, nostrum,
              reiciendis facere nemo!
            </p>
            <ul className="list-inline">
              <li>Date: January 2020</li>
              <li>Client: Threads</li>
              <li>Category: Illustration</li>
            </ul>
            <Button variant="primary" onClick={() => toggleModal()}>
              <FontAwesomeIcon icon={['fas', 'times']} />
              Fechar
            </Button>
          </Modal.Body>
        </Col>
      </Row>
    </Container>
  </Modal>
)

export default Modal1
