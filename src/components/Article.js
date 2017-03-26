import React, { PropTypes } from 'react'
import { ThreeBounce } from 'better-react-spinkit'
import Paper from './Paper'
import Markdown from './Markdown'

const Article = ({ isFetching, markdown }) => (
    <Paper>
        { isFetching && <ThreeBounce size={50}/> }
        { !isFetching && 
            <Markdown>
                {markdown}
            </Markdown>
        }
    </Paper>
)

Article.propTypes = {
    isFetching: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired
}

export default Article