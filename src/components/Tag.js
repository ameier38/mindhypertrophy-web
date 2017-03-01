import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'

const Tag = ({name, onTagClick}) => {
    const style = (name === "All") ? "primary" : "default"
    return (
        <Button bsSize="xsmall" bsStyle={style} onClick={onTagClick}>{name}</Button>
    )
}
Tag.PropTypes = {
    name: PropTypes.string.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default Tag
