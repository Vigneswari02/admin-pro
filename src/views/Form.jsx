import React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';

const FormExample = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Card>
                        <Form className='p-4'>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label as="legend" column sm={2}>
                                        Radios
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            label="first radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="second radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="third radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>
                            <Form.Group as={Row} controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check label="Remember me" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Sign in</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Form className='p-4'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="file" />
                            </Form.Group>
                            <Form.Group controlId="formBasicRange">
                                <Form.Label>Range</Form.Label>
                                <Form.Control type="range" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default FormExample