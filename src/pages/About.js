import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Container, Row, Card } from 'react-bootstrap'
import OrestLOGO from '../assets/OrestLOGO.jpg'

const useStyles = makeStyles(() => ({
    cardImg: {
        width: '100%',
    },
    cardInfo: {},
    cardContacts: {},
}))

export const About = () => {
    const classes = useStyles()
    return (
        <>
            <Container>
                <Row>
                    <Card.Img className={classes.cardImg}>
                        <img src={OrestLOGO} />
                    </Card.Img>
                    <Card>
                        <Card.Info className={classes.cardInfo}>
                            о.Орест
                        </Card.Info>
                        <Card.Contacts className={classes.cardContacts}>
                            Контакти
                        </Card.Contacts>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
