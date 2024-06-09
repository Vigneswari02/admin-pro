import React, { useState } from 'react';
import { Col, Row, Alert, Button, Card } from 'react-bootstrap';

const AlertExample = () => {
    const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
    const [show, setShow] = useState(true);
    return (
        <div>
            <div className='page-heading mb-4'>
                <h3>Alerts</h3>
            </div>
            <Row>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <Card className='p-5'>
                        <h5 className="mb-4">Default Alert</h5>
                        {variants.map((variant) => (
                            <Alert key={variant} variant={variant}>
                                This is a {variant} alert—check it out!
                            </Alert>
                        ))}
                    </Card>

                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <Card className='p-5'>
                        <h5 className="mb-4">Alert With Link</h5>
                        {variants.map((variant) => (
                            <Alert key={variant} variant={variant}>
                                This is a {variant} alert with{' '}
                                <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
                                you like.
                            </Alert>
                        ))}
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <Card className='p-5'>
                        <h5 className="mb-4">Dismissible Alert</h5>
                        {variants.map((variant) => (
                            <Alert key={variant} variant={variant} onClose={() => setShow(false)} dismissible>
                                This is a {variant} alert with close button
                            </Alert>
                        ))}
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <Card className='p-5 mb-5'>
                        <h5 className="mb-4">Danger Alert</h5>
                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                            <p>
                                Change this and that and try again. Duis mollis, est non commodo
                                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                                Cras mattis consectetur purus sit amet fermentum.
                            </p>
                        </Alert>
                    </Card>
                    <Card className='p-5'>
                        <h5 className="mb-4">Success Alert</h5>
                        <Alert show={show} variant="success">
                            <Alert.Heading>My Alert</Alert.Heading>
                            <p>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                                fermentum.
                            </p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => setShow(!show)} variant="outline-success">
                                    Close me
                                </Button>
                            </div>
                        </Alert>

                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AlertExample;
