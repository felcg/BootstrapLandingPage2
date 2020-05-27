import React from 'react'
import {
  Container, Button,
} from 'react-bootstrap'

const goToServices = () => {
  const elmnt = document.getElementById('services')
  elmnt.scrollIntoView({ behavior: 'smooth' })
}
const Header = () => (
  <header className="masthead">
    <Container className="text-center text-white">
      <p className="masthead-subheading">Bem vindos ao nosso estúdio</p>
      <p className="masthead-heading text-upper">É bom te receber!</p>
      <button onClick={() => goToServices()} className="btn btn-xl" id="botao-saber-mais">SABER MAIS</button>
    </Container>
  </header>
)

export default Header
