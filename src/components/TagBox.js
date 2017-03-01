import React, { PropTypes } from 'react'
import { ButtonToolbar } from 'react-bootstrap'
import Tag from './Tag'
import '../styles/TagBox.css'

const TagBox = ({tags, onTagClick}) => (
    <div className="TagBox">
        <ButtonToolbar>
            { tags.map(tag =>
                <Tag 
                    key={tag.id} 
                    name={tag.name} 
                    onClick={() => onTagClick(tag.id)} /> 
            )}
        </ButtonToolbar>
    </div>

)
TagBox.propTypes = {
    tags: PropTypes.array.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default TagBox