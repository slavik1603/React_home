import React from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core'
import OrestBiograph from '../assets/OrestBiograph.jpg'

const useStyles = makeStyles(() => ({
    cardImg: {
        width: 'auto',
    },
    cardFoto: {
        width: '100%',
    },
    cardAbout: {
        backgroundColor: 'aqua',
    },
    cardInfo: {
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
                        <Card className={classes.cardFoto}>
                            <Card.Img
                                variant="top"
                                src={OrestBiograph}
                                className={classes.cardImg}
                            />
                        </Card>
                    </Col>
                    <Col>
                        <Card className={classes.cardAbout}>
                            <Card.Info className={classes.cardInfo}>
                                о. Орест Рубель, 1959 р.н., священник УГКЦ,
                                служить на парафії с. Ульвівок, Теляж, Конотопи
                                Сокальського деканату, Сокальсько-Жовківської
                                Єпархії. Священичі свячення прийняв з рук бл.п.
                                владики Юліана Вороновського 29 грудня 1991 р.
                                Одружений, має четверо дітей. Проживає на
                                парафії села Конотопи. Автор 16 книг.
                            </Card.Info>
                            <Card.Contacts className={classes.cardContacts}>
                                Контакти
                            </Card.Contacts>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
