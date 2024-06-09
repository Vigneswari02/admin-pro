import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import Logo from "../assets/img/logo.png";
import Loginimg from "../assets/img/auth-right.svg"
// import "../assets/css/auth-style.css";

const Register = () => {
  return (
    <div className='col-10 auth-container'>
      <Card className='auth-card'>
        <Row>
          <Col md={7} className='auth-right'>
            <img src={Loginimg} alt="" className='login-img' />
          </Col>
          <Col md={5} className='auth-left'>
            <img src={Logo} alt="logo" width={"30%"} className='' />
            <div className="auth-inner">
              <Card>
                <Card.Body>
                  <h2 className='text-green mb-4'>SignUp Now</h2>
                  <Form action='/home'>
                    <Form.Group className='mb-4'>
                      <Form.Label className='fw-semibold'>User</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className='mb-4'>
                      <Form.Label className='fw-semibold'>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className='mb-4'>
                      <Form.Label className='fw-semibold'>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" autoComplete="on" />
                    </Form.Group>
                    <Button type="submit" className=' w-100 login-btn'>
                      Sign Up
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
          
        </Row>
      </Card>
    </div>
  )
}
export default Register