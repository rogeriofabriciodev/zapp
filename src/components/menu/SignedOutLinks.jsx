import React from 'react'
import { Nav } from 'react-bootstrap'

const SignedOutLinks = () => {
  return (
    <>
      <Nav.Link href="#">Sign up</Nav.Link>
      <Nav.Link href="#">Login</Nav.Link>
    </>
  )
}

export default SignedOutLinks