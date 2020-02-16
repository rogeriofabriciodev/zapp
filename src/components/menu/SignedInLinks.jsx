import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavDropdown } from 'react-bootstrap'

const SignedInLinks = () => {
  return (
    <>
      <Nav className="mr-auto">
        <Nav.Link href="#"><NavLink to='addProducts'>+ Produto</NavLink></Nav.Link>
        <NavDropdown title="Cadastrar" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"><NavLink to='addProvider'>Fornecedor</NavLink></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"><NavLink to='addManufacturer'>Fabricante</NavLink></NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">Rogério</Nav.Link>
        <Nav.Link href="#memes">Logout</Nav.Link>
      </Nav>
    </>
  )
}

export default SignedInLinks