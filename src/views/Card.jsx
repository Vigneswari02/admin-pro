import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from '../assets/img/img-286x180.svg';
import { Row, Col } from 'react-bootstrap';

function CardExample() {
    return (
        <Row className='p-4'>
            <Row>
                <h4 className='mb-3'>Light Cards</h4>
                <Col>
                    <h5>Simple Card</h5>
                    <Card style={{ width: '18rem' }} className='m-4'>
                        <Card.Body>This is some text within a card body.Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in quisquam ratione ea laborum rerum maiores est assumenda ut, atque nobis eligendi velit repudiandae, exercitationem reiciendis inventore asperiores explicabo minus.Some quick example text to build on the</Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h5>Card with Image</h5>
                    <Card style={{ width: '18rem' }} className='m-4'>
                        <Card.Img variant="top" src={CardImg} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h5>Card with Link</h5>
                    <Card style={{ width: '18rem' }} className='m-4'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <h4 className='mb-3'>Dark Cards</h4>
                <Col>
                    <h5>Simple Card</h5>
                    <Card style={{ width: '18rem' }} className='card-black m-4'>
                        <Card.Body>This is some text within a card body.Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in quisquam ratione ea laborum rerum maiores est assumenda ut, atque nobis eligendi velit repudiandae, exercitationem reiciendis inventore asperiores explicabo minus.Some quick example text to build on the</Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h5>Card with Image</h5>
                    <Card style={{ width: '18rem' }} className='card-black m-4'>
                        <Card.Img variant="top" src={CardImg} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h5>Card with Link</h5>
                    <Card style={{ width: '18rem' }} className='card-black m-4'>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Row>
    );
}

export default CardExample;