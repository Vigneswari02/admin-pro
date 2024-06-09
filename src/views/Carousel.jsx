import {Carousel, Card} from 'react-bootstrap';
import img1 from '../assets/img/carousel-1.svg';
import img2 from '../assets/img/carousel-2.svg';
import img3 from '../assets/img/carousel-3.svg';
import swiperImg from '../assets/img/swiper-img.svg';
import { Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function CarouselExample() {
    return (
        <Card className='p-5'>
            <Row>
                <Col xl={6} lg={6} md={6} sm={12} className='mb-5'>
                    <h4 className='mb-4'>Bootstrap Carousel (Autoplay On)</h4>
                    <Carousel>
                        <Carousel.Item>
                            <img src={img1} className='w-100' alt='carousel' />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img2} className='w-100' alt='carousel' />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3} className='w-100' alt='carousel' />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} className='mb-5'>
                    <h4 className='mb-4'>Bootstrap Carousel (Autoplay Off)</h4>
                    <Carousel interval={null}>
                        <Carousel.Item>
                            <img src={img1} className='w-100' alt='carousel' />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img2} className='w-100' alt='carousel' />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3} className='w-100' alt='carousel' />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col>
                    <h4 className='mb-2'>Swiper Carousel</h4>
                    <Row className='mb-5'>
                        <h5 className='mb-4'>With Scroll</h5>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h5 className='mb-4'>With Pagination</h5>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={swiperImg} className='w-100' alt='carousel' />
                            </SwiperSlide>
                        </Swiper>
                    </Row>
                </Col>
            </Row>
        </Card>

    );
}

export default CarouselExample;