import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'
import { ThreeBounce } from 'better-react-spinkit'
import CardContent from './CardContent'
import '../styles/Card.css'

const DetailCard = ({ isFetching, content }) => (
    <Col xs={12}>
        <div className="Card">
            { isFetching && <ThreeBounce size={50}/> }
            { !isFetching && <CardContent content={content} /> }
        </div>
    </Col>
)

DetailCard.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired
}

export default DetailCard