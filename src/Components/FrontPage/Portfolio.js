import React, { useState } from 'react'
import {
  Container, Row, Col, Image,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal1 from '../Modals/Modal1'
import Modal2 from '../Modals/Modal2'
import Modal3 from '../Modals/Modal3'
import Modal4 from '../Modals/Modal4'
import Modal5 from '../Modals/Modal5'
import Modal6 from '../Modals/Modal6'


const Portfolio = () => {
  const [modals, setVisibility] = useState({
    modal1: false, modal2: false, modal3: false, modal4: false, modal5: false, modal6: false,
  })
  const toggleModal = (modal, modalname) => {
    const toggledModal = !modal
    Object.defineProperty(modals, `${modalname}`, {
      value: toggledModal,
    })
    const newModals = { ...modals }
    setVisibility(newModals)
  }

  return (
    <section className="page-section bg-light" id="portfolio">
      <Container>
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Portfolio</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <Row>
          <Col lg={4} sm={6} className="mb-4">
            <div className="portfolio-item">
              <a onClick={() => toggleModal(modals.modal1, 'modal1')} className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={['fas', 'plus']} size="3x" />
                  </div>
                </div>
                <Image className="img-fluid" src="https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Threads</div>
                <div className="portfolio-caption-subheading text-muted">Illustration</div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="mb-4">
            <div className="portfolio-item">
              <a onClick={() => toggleModal(modals.modal2, 'modal2')} className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={['fas', 'plus']} size="3x" />
                  </div>
                </div>
                <Image className="img-fluid" src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Threads</div>
                <div className="portfolio-caption-subheading text-muted">Illustration</div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="mb-4">
            <div className="portfolio-item">
              <a onClick={() => toggleModal(modals.modal3, 'modal3')} className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={['fas', 'plus']} size="3x" />
                  </div>
                </div>
                <Image className="img-fluid" src="https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Threads</div>
                <div className="portfolio-caption-subheading text-muted">Illustration</div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="mb-4">
            <div className="portfolio-item">
              <a onClick={() => toggleModal(modals.modal4, 'modal4')} className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={['fas', 'plus']} size="3x" />
                  </div>
                </div>
                <Image className="img-fluid" src="https://images.pexels.com/photos/220152/pexels-photo-220152.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Threads</div>
                <div className="portfolio-caption-subheading text-muted">Illustration</div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="mb-4">
            <div className="portfolio-item">
              <a onClick={() => toggleModal(modals.modal5, 'modal5')} className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={['fas', 'plus']} size="3x" />
                  </div>
                </div>
                <Image className="img-fluid" src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Threads</div>
                <div className="portfolio-caption-subheading text-muted">Illustration</div>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6} className="mb-4">
            <div className="portfolio-item">
              <a onClick={() => toggleModal(modals.modal6, 'modal6')} className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <FontAwesomeIcon icon={['fas', 'plus']} size="3x" />
                  </div>
                </div>
                <Image className="img-fluid" src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Threads</div>
                <div className="portfolio-caption-subheading text-muted">Illustration</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal1 visible={modals.modal1} toggleModal={() => toggleModal(modals.modal1, 'modal1')} />
      <Modal2 visible={modals.modal2} toggleModal={() => toggleModal(modals.modal2, 'modal2')} />
      <Modal3 visible={modals.modal3} toggleModal={() => toggleModal(modals.modal3, 'modal3')} />
      <Modal4 visible={modals.modal4} toggleModal={() => toggleModal(modals.modal4, 'modal4')} />
      <Modal5 visible={modals.modal5} toggleModal={() => toggleModal(modals.modal5, 'modal5')} />
      <Modal6 visible={modals.modal6} toggleModal={() => toggleModal(modals.modal6, 'modal6')} />
    </section>
  )
}

export default Portfolio
