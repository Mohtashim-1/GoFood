import React from 'react';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MyCarousel = () => {
    return (
        <div>
            <style>
                {`
                    .carousel-item {
                        height: 500px; /* Adjust the height as needed */
                    }
                `}
            </style>
            <Carousel id="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-30"
                        src="https://source.unsplash.com/random/200×200/?burger"
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success"
                                className={{ color: 'white', backgroundColor: 'green' }}
                            >Search</Button>
                        </Form>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/random/200×200/?burger"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/random/200×200/?sandwitch"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MyCarousel;
