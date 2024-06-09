import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Col, Row, ProgressBar, Card } from 'react-bootstrap';
import { lineoptions, lineseries, baroptions, barseries, radialseries, radialoptions } from '../components/Chart';
const Home = () => {
    const state = {
        lineoptions: lineoptions.options,
        lineseries: lineseries.series,
        baroptions: baroptions.options,
        barseries: barseries.series,
        radialoptions: radialoptions.options,
        radialseries: radialseries.series
    };
    return (
        <div className=''>
            <Row>
                <h3>Dashboard</h3>
            </Row>
            <Row className='mb-4'>
                <Col xl='8' lg='8' md='12' sm='12'>
                    <Row>
                        <Col xl='3' lg='3' md='6' sm='12'>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Statistics</Card.Title>
                                    <div className='count'></div>
                                    <div className='chart-sm'>
                                        <ReactApexChart
                                            options={state.lineoptions}
                                            series={state.lineseries}
                                            type="line"
                                            height="70"
                                        />
                                    </div>
                                </Card.Body>
                            </Card> 
                        </Col>
                        <Col xl='3' lg='3' md='6' sm='12'>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Growth</Card.Title>
                                    <div className='count'></div>
                                    <ReactApexChart
                                        options={state.lineoptions}
                                        series={state.lineseries}
                                        type="line"
                                        height="70"
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl='3' lg='3' md='6' sm='12'>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Expenses</Card.Title>
                                    <div className='count'></div>
                                    <ReactApexChart
                                        options={state.lineoptions}
                                        series={state.lineseries}
                                        type="line"
                                        height="70"
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl='3' lg='3' md='6' sm='12'>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Statistics</Card.Title>
                                    <div className='count'></div>
                                    <ReactApexChart
                                        options={state.lineoptions}
                                        series={state.lineseries}
                                        type="line"
                                        height="70"
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col  xl='4' lg='4' md='12' sm='12'>
                    <div className="">
                        <Card className='card-black h-100'>
                            <Card.Body>
                                <Card.Title>Title</Card.Title>
                                <ProgressBar now={60} />
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl='8' lg='8' md='12' sm='12'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                <ReactApexChart
                                    options={state.baroptions}
                                    series={state.barseries}
                                    type="bar"
                                    height="350"
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl='4' lg='4' md='12' sm='12'>
                    <Card>
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                <ReactApexChart
                                    options={state.radialoptions}
                                    series={state.radialseries}
                                    type="radialBar"
                                    height="350"
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Home