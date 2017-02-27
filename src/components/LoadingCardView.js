import React, { PropTypes } from 'react'

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