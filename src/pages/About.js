import React from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core'
import OrestBiograph from '../assets/OrestBiograph.jpg'
import Suviy from '../assets/suviy-fon.jpg'

const useStyles = makeStyles(() => ({
    cardAbout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    cardImg: {
        width: 'auto',
    },
    cardFoto: {
        margin: '5px',
        width: '45%',
    },
    cardInfo: {
        margin: '5px',
        width: '45%',
        backgroundImage: 'url("${ suviy })',
    },
    cardText: {
        color: 'red',
    },
    cardContacts: {
        color: 'blue',
    },
}))

export const About = () => {
    const classes = useStyles()
    return (
        <>
            <Container>
                <Row>
                    <Col>
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
                                    Контакти
                                </Card.Subtitle>
                            </Card>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
