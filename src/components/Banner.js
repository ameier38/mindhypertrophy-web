import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import logoImage from '../images/mindhypertrophy.png'

const bannerStyle = {
    height: "20vh",
    width: "100vh"
}

const Banner = ({ imageUrl, includeLogo, title, description }) => {
    const backgroundStyle = {backgroundImage: `url(${imageUrl})`}
    const logo = includeLogo ? (<img src={logoImage} role="presentation" />) : null
    return (
        <Paper style={{...bannerStyle, ...backgroundStyle}}>
            {logo}
            <h1>{title}</h1>
            <p>{description}</p>
        </Paper>
    )
}

Banner.propTypes = {
    imageUrl: PropTypes.string,
    includeLogo: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Banner