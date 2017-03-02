import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'
import DisqusThread from 'react-disqus-thread'
import '../styles/Card.css'
import '../styles/CardContent.css'

const CommentsCard = ({ identifier, title }) => (
    <Col xs={12}>
        <div className="Card">
            <div className="CardContent">
                <DisqusThread
                    shortname="mindhypertrophy"
                    identifier={identifier}
                    title={title}
                    url="http://mindhypertrophy.com" />
            </div>
        </div>
    </Col>
)

CommentsCard.propTypes = {
    identifier: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default CommentsCard
