import React, { PropTypes } from 'react';
import dateFormat from 'dateformat'
import { Col } from 'react-bootstrap';
import CardHeader from './CardHeader';
import CardSummary from './CardSummary';
import TagBox from './TagBox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Article = ({ card, onCardClick, onTagClick }) => (
  <Card>
    <CardTitle title={card.title} subtitle={dateFormat(card.createdDate)} />
    <CardText>
        {card.summary}
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
)

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
