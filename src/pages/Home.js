import React from 'react'
import Slider from '../components/Slider'
import { Container, Row, Card, Button } from 'react-bootstrap'
import Family from '../assets/Family.jpg'
import bookNebOhorona from '../assets/bookNebOhorona.jpg'
import OrestLOGO from '../assets/OrestLOGO.jpg'
import dolunaSmerti from '../assets/dolunaSmerti.png'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import FonBODY from '../assets/FonBODY.jpg'

const useStyles = makeStyles(() => ({
    cardSlider: {
        color: 'blue',
    },
    cardFon: {
        backgroundImage: `url("${FonBODY}")`,
    },
    cardBlockTotal: {
        background: 'transparent',
        border: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardBlock: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '18em',
        height: '25em',
        margin: '2em',
        border: '2px solid brown',
        backgroundColor: 'rgb(59, 15, 15, 0.7)',
    },
    cardImg: {
        textAlign: 'center',
        margin: '5%',
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cardTitle: {
        color: 'white',
    },
    cardText: {
        color: 'white',
    },
    cardPsalmTotal: {
        background: 'transparent',
        border: 'none',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontFamily: 'Lobster',
    },
    cardImgPsalm: {
        maxWidth: '600px',
        margin: '1%',
        border: 'none',
    },
    cardPsalm: {
        maxWidth: '600px',
        margin: '1%',
        color: 'white',
        background: 'transparent',
        textAlign: 'center',
        border: 'none',
        backgroundColor: 'rgb(59, 15, 15, 0.7)',
    },
}))

export const Home = () => {
    const classes = useStyles()
    return (
        <>
            <Slider className={classes.cardSlider} />
            <Card className={classes.cardFon}>
                <Container
                    style={{
                        paddingTop: '2em',
                        paddingBottom: '2em',
                    }}
                >
                    <Row>
                        <Card className={classes.cardBlockTotal}>
                            <Card className={classes.cardBlock}>
                                <Card.Img
                                    variant="top"
                                    src={OrestLOGO}
                                    style={{
                                        maxWidth: '200px',
                                        height: '200px',
                                    }}
                                    className={classes.cardImg}
                                />
                                <Card.Body className={classes.cardBody}>
                                    <Card.Title className={classes.cardTitle}>
                                        About
                                    </Card.Title>
                                    <Card.Text className={classes.cardText}>
                                        Біографія о.Ореста
                                    </Card.Text>
                                    <Button
                                        variant="primary"
                                        style={{ color: 'white' }}
                                    >
                                        <Link
                                            to="/about"
                                            style={{ color: 'white' }}
                                        >
                                            Learn More
                                        </Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                            <Card className={classes.cardBlock}>
                                <Card.Img
                                    variant="top"
                                    src={bookNebOhorona}
                                    style={{
                                        maxWidth: '150px',
                                        height: '200px',
                                    }}
                                    className={classes.cardImg}
                                />
                                <Card.Body className={classes.cardBody}>
                                    <Card.Title className={classes.cardTitle}>
                                        Books
                                    </Card.Title>
                                    <Card.Text className={classes.cardText}>
                                        Книги о.Ореста
                                    </Card.Text>
                                    <Button
                                        variant="primary"
                                        style={{ color: 'white' }}
                                    >
                                        <Link
                                            to="/books"
                                            style={{ color: 'white' }}
                                        >
                                            Learn More
                                        </Link>
                                    </Button>
                                </Card.Body>
                            </Card>
                            <Card className={classes.cardBlock}>
                                <Card.Img
                                    variant="top"
                                    src={Family}
                                    style={{
                                        maxWidth: '250px',
                                    }}
                                    className={classes.cardImg}
                                />
                                <Card.Body className={classes.cardBody}>
                                    <Card.Title className={classes.cardTitle}>
                                        Parish Life
                                    </Card.Title>
                                    <Card.Text className={classes.cardText}>
                                        Життя парафії
                                    </Card.Text>
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
                        </Card>
                    </Row>
                </Container>
                <Container style={{ marginBottom: '30px' }}>
                    <Row>
                        <Card className={classes.cardPsalmTotal}>
                            <Card className={classes.cardImgPsalm}>
                                <img src={dolunaSmerti} />
                            </Card>
                            <Card className={classes.cardPsalm}>
                                <h2>(Псалом 23:4)</h2>
                                <p style={{ textAlign: 'center' }}>
                                    Коли я піду хоча б навіть долиною смертної
                                    темряви, то не буду боятися злого, бо Ти при
                                    мені,— Твоє жезло й Твій посох — вони мене
                                    втішать!
                                </p>
                            </Card>
                        </Card>
                    </Row>
                </Container>
            </Card>
        </>
    )
}
