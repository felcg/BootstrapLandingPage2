/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Team = () => (
  <section className="page-section text-center bg-light" id="team">
    <Container>
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Nosso time</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <Row>
        <Col lg={4}>
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKM9BUy0eVYn8_C3sg0J40Oa5MlWpFbS83fleauNdF4W5HQQJQ&usqp=CAU" alt="" />
            <h4>Gregorio</h4>
            <p className="text-muted">RH</p>

            <a className="btn btn-dark btn-social mx-2" href="#!">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>

            <a className="btn btn-dark btn-social mx-2" href="#!">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>

            <a className="btn btn-dark btn-social mx-2" href="#!">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
          </div>
        </Col>
        <Col lg={4}>
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL-6bDuOdXP3_OUj8K7IXlIm8Y5pl1PFWSjVHbryy9BBTHzb5N&usqp=CAU" alt="" />
            <h4>Renan</h4>
            <p className="text-muted">Designer</p>

            <a className="btn btn-dark btn-social mx-2" href="#!">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>

            <a className="btn btn-dark btn-social mx-2" href="#!">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>

            <a className="btn btn-dark btn-social mx-2" href="#!">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
          </div>
        </Col>
        <Col lg={4}>
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwzchYQWo5ZzCtzVzTFwdIrGTS0FRs2TCVJhas2v8ssl80fBu9&usqp=CAU" alt="" />
            <h4>Leticia</h4>
            <p className="text-muted">Desenvolvedora</p>

            <a className="btn btn-dark btn-social mx-2" href="#!">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>

            <a className="btn btn-dark btn-social mx-2" href="#!">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>

            <a className="btn btn-dark btn-social mx-2" href="#!">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
        </Col>
      </Row>
    </Container>

  </section>
)

export default Team
