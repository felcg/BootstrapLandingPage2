import React from 'react'
import {
  Container,
} from 'react-bootstrap'

const goToServices = () => {
  const elmnt = document.getElementById('services')
  elmnt.scrollIntoView({ behavior: 'smooth' })
}

const Header = () => (
  <header className="masthead">
    <Container className="text-center text-white">
      <p className="masthead-subheading">Bem vindos ao nosso estúdio</p>
      <p className="masthead-heading text-uppercase">É bom te receber!</p>
      <button onClick={() => goToServices()} className="btn btn-primary btn-xl text-uppercase" id="botao-saber-mais">SABER MAIS</button>
    </Container>
  </header>
)

export default Header
