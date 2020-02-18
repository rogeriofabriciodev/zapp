import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavDropdown } from 'react-bootstrap'

const SignedInLinks = () => {
  return (
    <>
      <Nav className="mr-auto">
        <Nav.Link href="#"><NavLink to='addProducts'>+ Produto</NavLink></Nav.Link>
        <NavDropdown title="Cadastrar" id="collasible-nav-dropdown">
          <NavDropdown.Item ><NavLink to='addProvider'>Fornecedor</NavLink></NavDropdown.Item>
          <NavDropdown.Item ><NavLink to='addManufacturer'>Fabricante</NavLink></NavDropdown.Item>
          {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        <NavDropdown.Divider />
          <NavDropdown.Item ><NavLink to='addCategory'>Categoria</NavLink></NavDropdown.Item>
          <NavDropdown.Item ><NavLink to='addSubCategory'>Sub-Categoria</NavLink></NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link >Rogério</Nav.Link>
        <Nav.Link h>Logout</Nav.Link>
      </Nav>
    </>
  )
}

export default SignedInLinks