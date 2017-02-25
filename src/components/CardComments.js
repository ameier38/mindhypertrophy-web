import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import DisqusThread from 'react-disqus-thread'

class CardComments extends Component{
    render(){
        return (
            <Col xs={12}>
                <div className="card">
                    <div className="card-content">
                        <DisqusThread
                            shortname="mindhypertrophy"
                            identifier={this.props.identifier.toString()}
                            title={this.props.title}
                            url={"http://mindhypertrophy.com"}
                        />
                    </div>
                </div>
            </Col>
        );
    }
}

export default CardComments;
