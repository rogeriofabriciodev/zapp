import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Navegator = () => {
    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">.Z App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#">+ Produto</Nav.Link>
                    <NavDropdown title="Cadastrar" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Fornecedor</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Fabricante</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">Rogério</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Logout
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}

export default Navegator