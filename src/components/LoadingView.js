import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { ThreeBounce } from 'better-react-spinkit'
import Banner from './Banner'
import '../styles/CardView.css'

const LoadingCardView = () => (
    <div className="CardView">
        <Banner 
            includeLogo={true}
            title={"Loading..."}
            description={""} />
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