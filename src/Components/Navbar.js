import React, { useState, useEffect } from 'react'
import {
  Navbar, Container, Nav,
} from 'react-bootstrap'


const NavBar = () => {
  const [scrollTop, setScrollTop] = useState(0)
  const [active, setActive] = useState()

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop)
    }
    if (scrollTop > 100) {
      setActive(true)
    } else {
      setActive(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  const scroll = () => {
    console.log(document)
  }

  return (
    <Navbar fixed="top" expand="lg" id="mainNav" className={`${active ? 'navbar-shrink' : ''}`}>
      <button onClick={() => scroll()}>scroll</button>
      <Container>
        <Navbar.Brand href="#home">Sua Empresa</Navbar.Brand>
        <Navbar.Toggle aria-controls="links-navbar" />
        <Navbar.Collapse className="justify-content-end" id="links-navbar">
          <Nav>
            <Nav.Item>
              <Nav.Link className="text-white text-upper nav-item" href="#home">SERVICES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white text-upper nav-item" href="#link">PORTFOLIO</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white text-upper nav-item" href="#link">ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white text-upper nav-item" href="#link">TEAM</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white text-upper nav-item" href="#link">CONTACT</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
