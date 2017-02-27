import React, { PropTypes } from 'react'
import Markdown from 'react-markdown-plus';
import '../styles/CardContent.css'

const CardContent = ({ content }) => (
    <div className="CardContent">
        <Markdown text={content} style={{maxWidth: 768}} />
    </div>
)

CardContent.propTypes = {
    content: PropTypes.string.isRequired
}

export default CardContent
