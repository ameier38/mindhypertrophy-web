import React, { PropTypes } from 'react';
import '../styles/CardHeader.css';

const CardHeader = ({title, createdDate}) => (
    <div className="CardHeader">
        <h3 className="title">{title}</h3>
        <span className="date">{createdDate}</span>
    </div>
)
CardHeader.propTypes = {
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired
}

export default CardHeader
