import React, { PropTypes } from 'react'
import { grey500 } from 'material-ui/styles/colors'
import Chip from 'material-ui/Chip';

const tagStyle = {
    margin: 4,
    backgroundColor: grey500
}

const Tag = ({name, onTagClick}) => (
    <Chip style={tagStyle} onTouchTap={onTagClick} >
        {name}
    </Chip>
)

Tag.PropTypes = {
    name: PropTypes.string.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default Tag
