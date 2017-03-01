import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'
import CardContent from './CardContent'
import '../styles/Card.css'

const DetailCard = ({ content }) => (
    <Col xs={12}>
        <div className="Card">
            <CardContent content={content} />
        </div>
    </Col>
)

DetailCard.propTypes = {
    content: PropTypes.string.isRequired
}

export default DetailCard