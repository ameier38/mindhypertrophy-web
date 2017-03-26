import React, { PropTypes } from 'react'
import NavigationIcon from './NavigationIcon'
import '../styles/SideNavigation.css'

const SideNavigation = ({ onFindClick, onArticleClick, onTagClick }) => (
    <div className="SideNavigation hide-on-med-and-down">
        <div className="icon-container">
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

SideNavigation.propTypes = {
    onFindClick: PropTypes.func.isRequired,
    onArticleClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default SideNavigation