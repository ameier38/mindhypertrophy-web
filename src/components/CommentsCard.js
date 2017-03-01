import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'
import DisqusThread from 'react-disqus-thread'
import '../styles/Card.css'

const CommentsCard = ({ identifier, title }) => (
    <Col xs={12}>
        <div className="Card">
            <DisqusThread
                shortname="mindhypertrophy"
                identifier={this.props.identifier.toString()}
                title={this.props.title}
                url={"http://mindhypertrophy.com"}
            />
        </div>
    </Col>
)

CommentsCard.propTypes = {
    identifier: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default CommentsCard
