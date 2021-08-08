import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import bookAdam from '../assets/bookAdam.jpg'
import bookChasha from '../assets/bookChasha.jpg'
import bookCilytel from '../assets/bookCilytel.jpg'
import bookNebOhorona from '../assets/bookNebOhorona.jpg'
import bookRaduisia from '../assets/bookRaduisia.jpg'
import bookRoduna from '../assets/bookRoduna.jpg'
import bookSerce1 from '../assets/bookSerce1.jpg'
import bookSerce2 from '../assets/bookSerce2.jpg'
import bookSerce3 from '../assets/bookSerce3.jpg'
import bookShodynku from '../assets/bookShodynku.jpg'
import bookSvitlaMeta from '../assets/bookSvitlaMeta.jpg'
import bookVusluhay from '../assets/bookVusluhay.jpg'

const useStyles = makeStyles(() => ({
    spanName: {
        color: '#ad0fee',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    spanCategory: {
        color: 'red',
        fontWeight: 'bold',
    },
    cardStyle: {
        display: 'flex',
        justifyContent: 'center',
        width: '18em',
        height: '35em',
        marginTop: '2em',
        border: '2px solid brown',
        backgroundColor: 'rgb(59, 15, 15, 0.2)',
    },
    cardImg: {
        marginTop: '5px',
        width: '250px',
        height: '340px',
        display: 'flex',
        alignSelf: 'center',
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    cardButton: {
        color: 'white',
        width: '150px',
    },
    cardTextName: {
        color: 'black',
        fontWeight: 'bold',
        textDecoration: 'underline',
        backgroundColor: 'aqua',
        textAlign: 'center',
    },
}))

export const Books = () => {
    const classes = useStyles()
    return (
        <>
            <Container style={{ paddingTop: '2em', paddingBottom: '2em' }}>
                <Row>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookNebOhorona}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    НЕБЕСНА ОХОРОНА
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Життєві історії
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookShodynku}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    СХОДИНКИ ДО НЕБА
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Життєві історії
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookAdam}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    АДАМ
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Різне
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookSvitlaMeta}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    СВІТЛА МЕТА - НЕБО
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Різне
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookSerce1}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    СЕРЦЕ ЧИСТЕ 1
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Проповіді
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookSerce2}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    СЕРЦЕ ЧИСТЕ 2
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Проповіді
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookSerce3}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    СЕРЦЕ ЧИСТЕ 3
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Проповіді
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookVusluhay}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    ВИСЛУХАЙ БОЖЕ, МОЮ МОЛИТВУ
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Життєві історії
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookCilytel}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    НАЙБІЛЬШИЙ ЦІЛИТЕЛЬ САМ ГОСПОДЬ БОГ
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Життєві історії
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookChasha}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    ПОДАРОВАНА ЧАША
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Життєві історії
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookRoduna}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    РОДИНА - СПІЛЬНОТА ЛЮБОВІ
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Проповіді
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className={classes.cardStyle}>
                            <Card.Img
                                variant="top"
                                src={bookRaduisia}
                                className={classes.cardImg}
                            />
                            <Card.Body className={classes.cardBody}>
                                <Card.Title>Books</Card.Title>
                                <span className={classes.spanName}>Name:</span>
                                <Card.Text className={classes.cardTextName}>
                                    РАДУЙСЯ, БЛАГОДАТНА
                                </Card.Text>
                                <span className={classes.spanCategory}>
                                    CATEGORY:
                                </span>
                                <Button
                                    variant="primary"
                                    className={classes.cardButton}
                                >
                                    Різне
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
