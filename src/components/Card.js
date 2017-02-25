import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import CardHeader from './CardHeader';
import CardSummary from './CardSummary';
import TagContainer from './TagContainer';
import '../styles/Card.css';

class Card extends Component{
    render(){
        return (
            <Col xs={12} sm={6}>
                <div className="Card" onClick={this.props.onClick.bind(null,`/articles/${this.props.slug}`)}>
                    <CardHeader title={this.props.title} createdDate={this.props.createdDate} />
                    <CardSummary content={this.props.summary} />
                    <TagContainer tags={this.props.tags} onClick={this.props.onClick} />
                </div>
            </Col>
        );
    }
}

export default Card;
