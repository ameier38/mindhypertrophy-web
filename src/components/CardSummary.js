import React, { PropTypes } from 'react';
import '../styles/CardSummary.css';

const CardSummary = ({content}) => (
    <div className="CardSummary">
        <p>{content}</p>
    </div>
);
CardSummary.propTypes = {
    content: PropTypes.string.isRequired
}

export default CardSummary;
