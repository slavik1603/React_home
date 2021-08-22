import React from 'react'
import booksArray from './Components/Cards/BooksArray'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'
import { useState } from 'react'

const Category = () => {
    const [items, setItems] = useState(booksArray)
    const filterItem = (categItem) => {
        const updatedItems = booksArray.filter((curElem) => {
            return curElem.category === categItem
        })
        setItems(updatedItems)
    }
    return (
        <>
            <h1 className="mt-5 text-center main-heading">Foto</h1>
            <hr />
            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <Button
                        className="btn btn-warning"
                        onClick={() => filterItem('Життєві історії')}
                    >
                        Життєві історії
                    </Button>
                    <Button
                        className="btn btn-warning"
                        onClick={() => filterItem('Проповіді')}
                    >
                        Проповіді
                    </Button>
                    <Button
                        className="btn btn-warning"
                        onClick={() => filterItem('Різне')}
                    >
                        Різне
                    </Button>
                    <Button
                        className="btn btn-warning"
                        onClick={() => setItems(booksArray)}
                    >
                        All
                    </Button>
                </div>
            </div>
            {items.map((elem) => {
                const { name, category, image } = elem
                return (
                    <Container>
                        <Row>
                            <Col>
                                <Card>Foto{image}</Card>
                                <Card>Category:{category}</Card>
                                <Card>Name:{name}</Card>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </>
    )
}
export default Category
