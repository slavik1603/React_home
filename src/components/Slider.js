/* eslint-disable no-unused-vars */
import React from 'react'
import { Carousel } from 'react-bootstrap'
import kanykulyKonotopy from '../assets/kanykulyKonotopy.jpg'
import kanykulyTeljash from '../assets/kanykulyTeljash.jpg'
import kanykulyUlvivok from '../assets/kanykulyUlvivok.jpg'

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{ height: '600px' }}>
                <img
                    className="d-block w-100"
                    src={kanykulyKonotopy}
                    alt="Kanykuly-Konotopy"
                />
                <Carousel.Caption>
                    <h3>Kanykuly z Bogom</h3>
                    <p>village Konotopy</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '600px' }}>
                <img
                    className="d-block w-100"
                    src={kanykulyTeljash}
                    alt="Kanykuly-Teljash"
                />
                <Carousel.Caption>
                    <h3>Kanykuly z Bogom</h3>
                    <p>village Teljash</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '600px' }}>
                <img
                    className="d-block w-100"
                    src={kanykulyUlvivok}
                    alt="KanykulyUlvivok"
                />
                <Carousel.Caption>
                    <h3>Kanykuly z Bogom</h3>
                    <p>village Ulvivok</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
