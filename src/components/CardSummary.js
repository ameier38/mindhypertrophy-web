import React, { PropTypes } from 'react'
import '../styles/CardSummary.css'

const CardSummary = ({summary}) => (
    <div className="CardSummary">
        <p>{summary}</p>
    </div>
);
CardSummary.propTypes = {
    summary: PropTypes.string.isRequired
}

export default CardSummary;
