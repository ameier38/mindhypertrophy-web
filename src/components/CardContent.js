import React, { PropTypes } from 'react'
import Markdown from './Markdown';
import '../styles/CardContent.css'

const CardContent = ({ content }) => (
    <div className="CardContent">
        <Markdown>
            {content}
        </Markdown>
    </div>
)

CardContent.propTypes = {
    content: PropTypes.string.isRequired
}

export default CardContent
