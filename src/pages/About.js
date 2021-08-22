import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core'
import OrestBiograph from '../assets/OrestBiograph.jpg'
import SuviyFon from '../assets/SuviyFon.jpg'
import { Link } from 'react-router-dom'
import FbIcon from '../assets/FbIcon.png'
import SkypeIcon from '../assets/SkypeIcon.png'
import PhoneIcon from '../assets/PhoneIcon.ico'
import BodyFon from '../assets/BodyFon.jpg'

const useStyles = makeStyles(() => ({
    cardBodyFon: {
        backgroundImage: `url("${BodyFon}")`,
        backgroundSize: '100%',
    },
    cardAbout: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'transparent',
        border: 'none',
    },
    cardImg: {
        width: 'auto',
    },
    cardFoto: {
        margin: '5px',
        width: '600px',
        height: '400px',
        background: 'transparent',
    },
    cardInfo: {
        margin: '5px',
        width: '600px',
        height: '400px',
        backgroundImage: `url("${SuviyFon}")`,
        backgroundSize: '100%',
        background: 'transparent',
        alignItems: 'center',
        justifyItems: 'center',
        justifyContent: 'space-around',
    },
    cardText: {
        color: 'blue',
        margin: '10%',
        marginBottom: '2%',
        textAlign: 'center',
        fontFamily: 'Lobster',
    },
    cardContacts: {
        color: 'blue',
        margin: '10%',
        marginTop: '3%',
    },
    cardInfoContacts: {
        display: 'block',
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: 'none',
    },
    cardInfoContactsTitle: {
        color: 'red',
        marginBottom: '10px',
        fontFamily: 'Lobster',
        textDecoration: 'cursive',
    },
    cardInfoContactsFbLogLink: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardInfoContactsFBLog: {
        textAlign: 'start',
        width: '30px',
        height: '30px',
        backgroundColor: 'blue',
        margin: '5px',
        backgroundImage: `url("${FbIcon}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    },
    cardInfoContactsFB: {
        color: '#900af6',
        textAlign: 'start',
    },
    cardInfoContactsSkypeLogLink: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardInfoContactsSkypeLog: {
        textAlign: 'start',
        width: '30px',
        height: '30px',
        backgroundColor: 'blue',
        margin: '5px',
        backgroundImage: `url("${SkypeIcon}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    },
    cardInfoContactsSkype: {
        color: '#900af6',
        textAlign: 'start',
    },
    cardInfoContactsPhoneLogLink: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardInfoContactsPhoneLog: {
        textAlign: 'start',
        width: '30px',
        height: '30px',
        backgroundColor: 'blue',
        margin: '5px',
        backgroundImage: `url("${PhoneIcon}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    },
    cardInfoContactsPhone: {
        color: '#900af6',
        textAlign: 'start',
    },
}))

export const About = () => {
    const classes = useStyles()
    return (
        <>
            <Card className={classes.cardBodyFon}>
                <Container>
                    <Row>
                        <Card className={classes.cardAbout}>
                            <Card className={classes.cardFoto}>
                                <Card.Img
                                    variant="top"
                                    src={OrestBiograph}
                                    className={classes.cardImg}
                                />
                            </Card>
                            <Card className={classes.cardInfo}>
                                <Card.Text className={classes.cardText}>
                                    о. Орест Рубель, 1959 р.н., священник УГКЦ,
                                    служить на парафії с. Ульвівок, Теляж,
                                    Конотопи Сокальського деканату,
                                    Сокальсько-Жовківської Єпархії. Священичі
                                    свячення прийняв з рук бл.п. владики Юліана
                                    Вороновського 29 грудня 1991 р. Одружений,
                                    має четверо дітей. Проживає на парафії села
                                    Конотопи. Автор 16 книг.
                                </Card.Text>
                                <Card.Subtitle className={classes.cardContacts}>
                                    <Card className={classes.cardInfoContacts}>
                                        <Card.Title
                                            className={
                                                classes.cardInfoContactsTitle
                                            }
                                        >
                                            Контактна інформація:
                                        </Card.Title>
                                        <Row>
                                            <Link
                                                to="/https://www.facebook.com/profile.php?id=100007425574974"
                                                className={
                                                    classes.cardInfoContactsFbLogLink
                                                }
                                            >
                                                <Card
                                                    className={
                                                        classes.cardInfoContactsFBLog
                                                    }
                                                ></Card>
                                                <Card.Link
                                                    className={
                                                        classes.cardInfoContactsFB
                                                    }
                                                >
                                                    https://www.facebook.com/profile.php?id=100007425574974
                                                </Card.Link>
                                            </Link>
                                        </Row>
                                        <Row>
                                            <Link
                                                to="/https://www.facebook.com/profile.php?id=100007425574974"
                                                className={
                                                    classes.cardInfoContactsSkypeLogLink
                                                }
                                            >
                                                <Card
                                                    className={
                                                        classes.cardInfoContactsSkypeLog
                                                    }
                                                ></Card>
                                                <Card.Link
                                                    className={
                                                        classes.cardInfoContactsSkype
                                                    }
                                                >
                                                    otecOrest.skype
                                                </Card.Link>
                                            </Link>
                                        </Row>
                                        <Row>
                                            <Link
                                                className={
                                                    classes.cardInfoContactsPhoneLogLink
                                                }
                                            >
                                                <Card
                                                    className={
                                                        classes.cardInfoContactsPhoneLog
                                                    }
                                                ></Card>
                                                <Card.Link
                                                    className={
                                                        classes.cardInfoContactsPhone
                                                    }
                                                >
                                                    +380977520309
                                                </Card.Link>
                                            </Link>
                                        </Row>
                                    </Card>
                                </Card.Subtitle>
                            </Card>
                        </Card>
                    </Row>
                </Container>
            </Card>
        </>
    )
}
