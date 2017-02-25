import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Jumbotron from './Jumbotron';

class Contact extends Component{
    render(){
        return(
            <div className="card-container">
                    <Jumbotron
                        title="Contact"
                        description="Something to say?" 
                        includeLogo={true} />
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <div className="card">
                                    <div className="card-content">
                                        <div>
                                            <p>
                                                Use below links for appropriate contact.
                                            </p>
                                            <ul>
                                                <li><a href="https://github.com/ameier38/mindhypertrophy/issues">Code issues</a></li>
                                                <li><a href="mailto:info@mindhypertrophy.com">Say hi</a></li>
                                            </ul>         
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                    </Grid>
                </div>
        )
    }
}

export default Contact;
