import React from 'react';
import { Jumbotron, Grid, Row } from 'react-bootstrap'
import DetailCard from './DetailCard'

const content = (
    <div>
        <p>
            Use below links for appropriate contact.
        </p>
        <ul>
            <li><a href="https://github.com/ameier38/mindhypertrophy/issues">Code issues</a></li>
            <li><a href="mailto:info@mindhypertrophy.com">Say hi</a></li>
        </ul>         
    </div>
)

const ContactView = () => (
    <div className="CardView">
        <Jumbotron
            title="Contact"
            description="Something to say?" />
        <Grid>
            <Row>
                <DetailCard isFetching={false} content={content} />
            </Row>
        </Grid>
    </div>
)

export default ContactView
