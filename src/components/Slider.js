/* eslint-disable no-unused-vars */
import React from 'react'
import { Carousel } from 'react-bootstrap'
import Kanykuly from '../assets/Kanykuly-Konotopy.jpg'

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Kanykuly}
                    alt="Kanykuly-Konotopy"
                />
                <Carousel.Caption>
                    <h3>Kanykuly z Bogom</h3>
                    <p>village Konotopy</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={family}
                    alt="Kanykuly-Konotopy"
                />
                <Carousel.Caption>
                    <h3>Kanykuly z Bogom</h3>
                    <p>village Konotopy</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={family}
                    alt="Kanykuly-Konotopy"
                />
                <Carousel.Caption>
                    <h3>Kanykuly z Bogom</h3>
                    <p>village Konotopy</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
