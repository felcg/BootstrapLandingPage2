import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Showcase = () => (
  <section className="showcase">
    <Container fluid className="p-0">
      <Row noGutters>
        <Col lg={{ span: 6, order: 1 }} className="text-white showcase-img" id="showcase-image-1" />
        <Col lg={{ span: 6, order: 2 }} className="showcase-text my-auto">
          <h2>Design Responsivo</h2>
          <p className="lead mb-0">
            Ao usar esse tema você pode ter a certeza que vai ficar ótimo em qualquer aparelho.
            A página vai ser responsiva no celular, tablet ou computador.
          </p>
        </Col>
      </Row>
      <Row noGutters>
        <Col lg={{ span: 6, order: 2 }} className="text-white showcase-img" id="showcase-image-2" />
        <Col lg={{ span: 6, order: 1 }} className="showcase-text my-auto">
          <h2>Pronta para Bootstrap 4</h2>
          <p className="lead mb-0">
            Bootstrap 4 está liderando o caminho para o desenvolvimento responsivo.
            Todos os nossos temas estão usando essa framework!
          </p>
        </Col>
      </Row>
      <Row noGutters>
        <Col lg={{ span: 6, order: 1 }} className="text-white showcase-img" id="showcase-image-3" />
        <Col lg={{ span: 6, order: 2 }} className="showcase-text my-auto">
          <h2>Fácil de usar e customizar</h2>
          <p className="lead mb-0">
            Adicione seu conteúdo e imagens e sua landing page já vai estar pronta para o mercado!
          </p>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Showcase
