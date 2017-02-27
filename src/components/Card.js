import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import CardHeader from './CardHeader';
import CardSummary from './CardSummary';
import TagContainer from './TagContainer';
import '../styles/Card.css';

const Card = ({ card, onCardClick, onTagClick}) => (
    <Col xs={12} sm={6}>
        <div className="Card" onClick={onCardClick}>
            <CardHeader title={title} createdDate={createdDate} />
            <CardSummary summary={summary} />
            <TagContainer tags={tags} onTagClick={onTagClick} />
        </div>
    </Col>
)

Card.propTypes = {
    card: PropTypes.object.isRequired,
    onCardClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default Card;
