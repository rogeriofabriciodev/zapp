import React, { useState } from 'react'
import firebase from '../config/FirebaseConfig'
import {Form, Button, Row } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


function Login(props) {
  const { classes } = props

  const [ email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="container">
      <Row className="justify-content-center mt-5">
      <Form onSubmit={e => e.preventDefault() && false}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button 
          variant="primary" 
          type="submit" 
          onClick={Login}
        >
          Login
        </Button>
      </Form>
      </Row>
    </div>
  )

    async function Login() {
      try {
        await firebase.login(email, password)
        props.history.replace('/dashboard')
      } catch(error) {
        alert(error.message)
      }
    }

}

export default withRouter(Login)