/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Testimonials = () => (
  <section className="testimonials text-center bg-light">
    <Container>
      <h2 className="mb-5">Depoimentos</h2>
      <Row>
        <Col lg={4}>
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKM9BUy0eVYn8_C3sg0J40Oa5MlWpFbS83fleauNdF4W5HQQJQ&usqp=CAU" alt="" />
            <h5>Gregorio</h5>
            <p className="font-weight-light mb-0">"Incrível! Funcionou perfeitamente para o meu negócio!"</p>
          </div>
        </Col>
        <Col lg={4}>
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQL-6bDuOdXP3_OUj8K7IXlIm8Y5pl1PFWSjVHbryy9BBTHzb5N&usqp=CAU" alt="" />
            <h5>Renan</h5>
            <p className="font-weight-light mb-0">"O fato da página estar usando Bootstrap 4 fez toda a diferença para mim. Excelente!"</p>
          </div>
        </Col>
        <Col lg={4}>
          <div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwzchYQWo5ZzCtzVzTFwdIrGTS0FRs2TCVJhas2v8ssl80fBu9&usqp=CAU" alt="" />
            <h5>Leticia</h5>
            <p className="font-weight-light mb-0">"Muito obrigada pelo trabalho, atingiu minhas expectativas!"</p>
          </div>
        </Col>
      </Row>
    </Container>

  </section>
)

export default Testimonials
