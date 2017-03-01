import React from 'react'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap'
import { ThreeBounce } from 'better-react-spinkit'

const LoadingCardView = () => (
    <div className="CardView">
        <Jumbotron title="Loading..." />
        <Grid>
            <Row>
                <Col xs={12}>
                    <ThreeBounce size={50}/>
                </Col>
            </Row> 
        </Grid>
    </div>    
)

export default LoadingCardView