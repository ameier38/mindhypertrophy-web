import React, { PropTypes } from 'react'
import Tag from './Tag'

const TagBox = ({tags, onTagClick}) => (
    <div className="TagBox">
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