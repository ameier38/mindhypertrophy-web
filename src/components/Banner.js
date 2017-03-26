import React, { PropTypes } from 'react'
import '../styles/Banner.css'

const Banner = ({ imageUrl, title, description }) => {
    const backgroundStyle = {backgroundImage: `url(${imageUrl})`}
    return (
        <div className="Banner z-depth-1 valign-wrapper" style={backgroundStyle}>
            <div className="container valign">
                <h2>{title}</h2>
                <h4>{description}</h4>
            </div>
        </div>
    )
}

Banner.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Banner