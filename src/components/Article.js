import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import { ThreeBounce } from 'better-react-spinkit'
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