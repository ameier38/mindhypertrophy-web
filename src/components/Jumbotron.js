import React, { PropTypes } from 'react'
import { Grid } from 'react-bootstrap'
import logoImage from '../mindhypertrophy.png'
import '../styles/Jumbotron.css'

const Jumbotron = ({ imageUrl, includeLogo, title, description }) => {
    var jumboStyle = {backgroundImage: `url(${imageUrl})`}
    var logo = includeLogo ? (<img src={logoImage} role="presentation" />) : null
    return(
        <div className="Jumbotron" style={jumboStyle}>
            <Grid>
                <div>
                    {logo}
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </Grid>               
        </div>
    )
}
Jumbotron.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    includeLogo: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Jumbotron