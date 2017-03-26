import React, { PropTypes } from 'react'
import NavigationIcon from './NavigationIcon'
import '../styles/BottomNavigation.css'

const BottomNavigation = ({ onFindClick, onArticleClick, onTagClick }) => (
    <div className="BottomNavigation hide-on-large-only">
        <div className="container icon-container z-depth-2">
            <NavigationIcon 
                iconName="home" 
                label="Home" 
                onClick={() => onTagClick("All")} />
            <NavigationIcon 
                iconName="update" 
                label="New" 
                onClick={() => onTagClick("New")} />
            <NavigationIcon 
                iconName="find_in_page" 
                label="Find" 
                onClick={onFindClick} />
            <NavigationIcon 
                iconName="info" 
                label="About" 
                onClick={() => onArticleClick("about")} />
            <NavigationIcon 
                iconName="message" 
                label="Contact" 
                onClick={() => onArticleClick("contact")} />
        </div>
    </div>
)

BottomNavigation.propTypes = {
    onFindClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired,
    onArticleClick: PropTypes.func.isRequired
}

export default BottomNavigation
