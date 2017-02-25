import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Tag.css';

const Tag = ({tagId, tagName, onClick}) => {
    const queryPath = { pathname: "/", query: { tagId: tagId }}
    const style = (tagId === 1) ? "primary" : "default"
    return (
        <Button bsSize="xsmall" bsStyle={style} onClick={onClick.bind(this,queryPath)}>{tagName}</Button>
    )
}
Tag.PropTypes = {
    tagId: PropTypes.number.isRequired,
    tagName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Tag;
