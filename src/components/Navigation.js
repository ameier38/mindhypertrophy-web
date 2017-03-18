import React, { PropTypes } from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import FindBottomNavigationItem from './FindBottomNavigationItem'
import Paper from 'material-ui/Paper'
import IconHome from 'material-ui/svg-icons/action/home'
import IconRecent from 'material-ui/svg-icons/action/update'
import IconAbout from 'material-ui/svg-icons/action/info'
import IconContact from 'material-ui/svg-icons/communication/comment'

const navigationStyle = {
    position: "fixed", 
    bottom: 0, 
    width: "100vw"
}

const Navigation = ({ onTagClick, onCardClick }) => (
    <Paper style={navigationStyle} zDepth={1}>
        <BottomNavigation>
            <BottomNavigationItem 
                label="Home" 
                icon={<IconHome />} 
                onTouchTap={() => onTagClick('All')}/>
            <BottomNavigationItem 
                label="Recent" 
                icon={<IconRecent />} 
                onTouchTap={() => onTagClick('New')}/>
            <FindBottomNavigationItem />
            <BottomNavigationItem
                label="About"
                icon={<IconAbout />}
                onTouchTap={() => onCardClick('about')}/>
            <BottomNavigationItem
                label="Contact"
                icon={<IconContact />}
                onTouchTap={() => onCardClick('contact')}/>
        </BottomNavigation>
    </Paper>
)

Navigation.propTypes = {
    onTagClick: PropTypes.func.isRequired,
    onCardClick: PropTypes.func.isRequired
}

export default Navigation
