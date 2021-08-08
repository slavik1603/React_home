import React from 'react'
import Slider from '../components/Slider'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import Family from '../assets/Family.jpg'
import bookNebOhorona from '../assets/bookNebOhorona.jpg'
import OrestLOGO from '../assets/OrestLOGO.jpg'
import dolunaSmerti from '../assets/dolunaSmerti.png'
import { Link } from 'react-router-dom'

export const Home = () => (
    <>
        <Slider />
        <Container
            style={{
                paddingTop: '2em',
                paddingBottom: '2em',
            }}
        >
            <Row>
                <Col>
                    <Card
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '18em',
                            height: '25em',
                            margin: '2em',
                            border: '2px solid brown',
                            backgroundColor: 'rgb(59, 15, 15, 0.2)',
                        }}
                    >
                        <Card.Img
                            variant="top"
                            src={OrestLOGO}
                            style={{
                                width: '200px',
                                height: '200px',
                                textAlign: 'center',
                                margin: '5%',
                            }}
                        />
                        <Card.Body
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                        >
                            <Card.Title>About</Card.Title>
                            <Card.Text>Біографія о.Ореста</Card.Text>
                            <Button
                                variant="primary"
                                style={{ color: 'white' }}
                            >
                                <Link to="/about" style={{ color: 'white' }}>
                                    Learn More
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '18em',
                            height: '25em',
                            margin: '2em',
                            border: '2px solid brown',
                            backgroundColor: 'rgb(59, 15, 15, 0.2)',
                        }}
                    >
                        <Card.Img
                            variant="top"
                            src={bookNebOhorona}
                            style={{
                                width: '150px',
                                height: '200px',
                                textAlign: 'center',
                                margin: '5%',
                            }}
                        />
                        <Card.Body
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                        >
                            <Card.Title>Books</Card.Title>
                            <Card.Text>Книги о.Ореста</Card.Text>
                            <Button
                                variant="primary"
                                style={{ color: 'white' }}
                            >
                                <Link to="/books" style={{ color: 'white' }}>
                                    Learn More
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '18em',
                            height: '25em',
                            margin: '2em',
                            border: '2px solid brown',
                            backgroundColor: 'rgb(59, 15, 15, 0.2)',
                        }}
                    >
                        <Card.Img
                            variant="top"
                            src={Family}
                            style={{
                                width: '250px',
                                textAlign: 'center',
                                margin: '5%',
                            }}
                        />
                        <Card.Body
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                        >
                            <Card.Title>Parish Life</Card.Title>
                            <Card.Text>Життя парафії</Card.Text>
                            <Button
                                variant="primary"
                                style={{ color: 'white' }}
                            >
                                <Link
                                    to="/parishLife"
                                    style={{ color: 'white' }}
                                >
                                    Learn More
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container style={{ marginBottom: '30px' }}>
            <Row>
                <Col>
                    <img src={dolunaSmerti} height={400} />
                </Col>
                <Col
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '10%',
                    }}
                >
                    <h2>(Псалом 23:4)</h2>
                    <p>
                        Коли я піду хоча б навіть долиною смертної темряви, то
                        не буду боятися злого, бо Ти при мені,— Твоє жезло й
                        Твій посох — вони мене втішать!
                    </p>
                </Col>
            </Row>
        </Container>
    </>
)
