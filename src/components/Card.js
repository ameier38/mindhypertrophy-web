import React, { PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import CardHeader from './CardHeader';
import CardSummary from './CardSummary';
import TagBox from './TagBox';
import '../styles/Card.css';

const Card = ({ card, onCardClick, onTagClick}) => (
    <Col xs={12} sm={6}>
        <div className="Card stub" onClick={onCardClick}>
            <CardHeader title={card.title} createdDate={card.createdDate} />
            <CardSummary summary={card.summary} />
            <TagBox tags={card.tags} onTagClick={onTagClick} />
        </div>
    </Col>
)

Card.propTypes = {
    card: PropTypes.object.isRequired,
    onCardClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default Card;
