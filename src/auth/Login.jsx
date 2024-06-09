import React from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import Logo from "../assets/img/logo.png";
import Loginimg from "../assets/img/auth-left.svg"
// import "../assets/css/auth-style.css";

const Login = () => {
  return (
    <div className='col-10 auth-container'>
      <Card className='auth-card'>
        <Row>
          <Col md={5} className='auth-left'>
            <img src={Logo} alt="logo" width={"30%"} className='mb-4' />
            <div className="auth-inner">
              <Card>
                <Card.Body>
                  <h2 className='text-green mb-4'>Welcome back</h2>
                  <Form action='/home'>
                    <Form.Group controlId="formBasicEmail" className='mb-4'>
                      <Form.Label className='fw-semibold'>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className='mb-4'>
                      <Form.Label className='fw-semibold'>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" autoComplete="on" />
                    </Form.Group>
                    <Button type="submit" className='mb-4 w-100 login-btn'>
                      Sign In
                    </Button>
                    <div>
                      <span className="text-muted">Don't have an Account </span>
                      <a href="register" className='reg-text'>Register Now</a>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col md={7} className='auth-right'>
            <img src={Loginimg} alt="" className='login-img' />
          </Col>
        </Row>
      </Card>
    </div>
  )
}
export default Login