import React, { PropTypes } from 'react'

const Tag = ({name, onTagClick}) => (
    <div className="Tag chip" onClick={onTagClick} >
        {name}
    </div>
)

Tag.PropTypes = {
    name: PropTypes.string.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default Tag
