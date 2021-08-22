import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core'
import FonParish from '../assets/FonParish.jpg'
import KanykuluKonotopy from '../assets/KanykuluKonotopy.jpg'
import KanykuluUlvivok from '../assets/KanykuluUlvivok.jpg'
import KanykuluTeljash from '../assets/KanykuluTeljash.jpg'

const useStyles = makeStyles(() => ({
    cardFonParish: {
        backgroundImage: `url("${FonParish}")`,
    },
    cardBlock: {
        background: 'transparent',
        color: 'black',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3%``',
    },
    cardImg: {
        margin: '1%',
        maxWidth: '600px',
    },
    cardText: {
        margin: '1%',
        maxWidth: '600px',
        backgroundColor: 'rgb(59, 15, 234, 0.5)',
        borderRadius: '5px',
        color: 'white',
        fontFamily: 'Lobster',
        textAlign: 'center',
        padding: '10px',
    },
}))

export const ParishLife = () => {
    const classes = useStyles()
    return (
        <>
            <Card className={classes.cardFonParish}>
                <Container>
                    <Row>
                        <Card className={classes.cardBlock}>
                            <Card.Img
                                variant="top"
                                src={KanykuluKonotopy}
                                className={classes.cardImg}
                            />
                            <Card.Text className={classes.cardText}>
                                04.08.2021 Сьогодні до храму священомученика
                                Йосафата прибули 29 веселих дітлахів, а це
                                означає, що наші «Канікули з Богом» стартували!
                                Розпочали ми наш день з спільної розмови з
                                Богом, тому встигли багато: і помолилися і
                                веселу руханку зробили, банси потанцювали і дуже
                                смачно перекусили (дякуємо тим хто долучився до
                                випікання пиріжків),естафети пограли і безліч
                                позитивних емоцій отримали! Особливо нашим дітям
                                сподобалося складання пазлів з святими
                                Володимиром і Ольгою, покровителями не тільки
                                першого дня канікулів, але й всієї України!
                                Тепер вони знають більше цікавого про тих хто
                                приніс християнство на терени Русі. Окрім цього,
                                дітей, втомлених таким насичени днем, чекав
                                приємний сюрприз – водні ігри. Під час яких усі
                                освіжилися тепленькою водичкою. Завершився наш
                                день спільними підсумками дітей з о. Орестом про
                                проведений весело час з Богом. Відпочиваємо із
                                хорошим настроєм, і чекаємо нового дня.
                            </Card.Text>
                        </Card>
                    </Row>
                    <Row>
                        <Card className={classes.cardBlock}>
                            <Card.Img
                                variant="top"
                                src={KanykuluTeljash}
                                className={classes.cardImg}
                            />
                            <Card.Text className={classes.cardText}>
                                02.08.21 «Канікули з Богом» стартували в с.
                                Теляж. «Особливо необхідно старатися, засіваючи
                                правду в душах дітей, бо хто є з правдою – той з
                                Богом і лише правдою вдасться перемогти сатану,
                                що фальшем провадить світ у прірву. Отже, будьмо
                                самі завжди й у всьому в правді, а та атмосфера,
                                в якій житиме дітвора, проникне в неї, зробить
                                фальш для неї гидкою, поширить правду і зміцнить
                                її в серцях.»
                            </Card.Text>
                        </Card>
                    </Row>
                    <Row>
                        <Card className={classes.cardBlock}>
                            <Card.Img
                                variant="top"
                                src={KanykuluUlvivok}
                                className={classes.cardImg}
                            />
                            <Card.Text className={classes.cardText}>
                                «Канікули з Богом» стартували в с. Ульвівок.
                                «Вбити в дитині почуття краси – почуття, яке
                                хоча б слабко, проте обов’язково в ній
                                закладене, – це означає скалічити в ній людину.
                                Обов’язок і завдання виховання – розвинути
                                почуття краси, відкрити йому дорогу і дати
                                силу.»
                            </Card.Text>
                        </Card>
                    </Row>
                </Container>
            </Card>
        </>
    )
}
