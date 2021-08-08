import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => (
    <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Container
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '10px',
            }}
        >
            <p>© Copyright 2021 Slavik Rubel</p>
        </Container>
    </Container>
)

export default Footer
