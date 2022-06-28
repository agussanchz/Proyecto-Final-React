//Importaciones
import React from 'react'
import { Link } from 'react-router-dom' 
import CartWidget from '../CartWidget/CartWidget'
import { Nav, Container, NavDropdown, Navbar } from 'react-bootstrap'

//Exportaciones de mi funcion Navbar, donde creo un menu de navegacion
export default function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className='navbar' variant="dark">
      <Container>
      <Navbar.Brand> <Link className='navbar_logo'to={'/'}>AsTecnologia</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link  href="#inicio"> <Link className='nav__link'to={'/'}>Inicio</Link> </Nav.Link>
          <Nav.Link href="#productos"> <Link className='nav__link'to={'/products'}>Productos</Link> </Nav.Link>
          <NavDropdown title="Categorias" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> <Link className='nav__link category'to={'/category/teclado'}>Teclados</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"> <Link className='nav__link category'to={'/category/mouse'}>Mouses</Link> </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <CartWidget/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
