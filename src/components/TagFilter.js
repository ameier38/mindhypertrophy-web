import React, { PropTypes } from 'react'
import { Grid, Row, Col, Well } from 'react-bootstrap'
import TagBox from './TagBox'
import '../styles/TagFilter.css'

const TagFilter = ({tags, onTagClick}) => (
    <div className="TagFilter">          
        <Grid>
            <Well bsSize="small">
                <TagBox 
                    tags={tags}
                    onTagClick={onTagClick} />
            </Well>
        </Grid>
    </div>
)
TagFilter.propTypes = {
    tags: PropTypes.array.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default TagFilter