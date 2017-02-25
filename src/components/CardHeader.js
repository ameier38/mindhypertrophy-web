import React, { Component } from 'react';
import '../styles/CardHeader.css';

class CardHeader extends Component {
    render() {
        <div className="Header">
            <h3 className="title">{this.props.title}</h3>
            <span className="date">{this.props.createdDate}</span>
        </div>
    }
}

export default CardHeader;
