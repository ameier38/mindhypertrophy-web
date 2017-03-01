import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import '../styles/Footer.css'

const Footer = () => (
    <Grid className="Footer">
        <Row>
            <Col xs={6}>
                <Link to="/">MindHypertrophy</Link>
            </Col>
            <Col xs={6}>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </Col>
        </Row>
    </Grid>
)

export default Footer