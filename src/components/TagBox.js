import React, { PropTypes } from 'react'
import Tag from './Tag'

const tagBoxStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}

const TagBox = ({tags, onTagClick}) => (
    <div style={tagBoxStyle}>
        { tags.map(tag =>
            <Tag 
                key={tag.id} 
                name={tag.name} 
                onTagClick={() => onTagClick(tag.name)} /> 
        )}
    </div>

)
TagBox.propTypes = {
    tags: PropTypes.array.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default TagBox