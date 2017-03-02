import React, { PropTypes } from 'react'
import { Jumbotron, Grid } from 'react-bootstrap'
import logoImage from '../images/mindhypertrophy.png'
import '../styles/Banner.css'

const Banner = ({ imageUrl, includeLogo, title, description }) => {
    const jumboStyle = {backgroundImage: `url(${imageUrl})`}
    const logo = includeLogo ? (<img src={logoImage} role="presentation" />) : null
    return (
        <Jumbotron className="Banner" style={jumboStyle} >
            <Grid>
                {logo}
                <h1>{title}</h1>
                <p>{description}</p>
            </Grid>               
        </Jumbotron>
    )
}

Banner.propTypes = {
    imageUrl: PropTypes.string,
    includeLogo: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Banner