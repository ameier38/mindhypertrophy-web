import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import DisqusThread from 'react-disqus-thread'

const Comments = ({ identifier, title }) => (
    <Paper>
        <DisqusThread
            shortname="mindhypertrophy"
            identifier={identifier}
            title={title}
            url="http://mindhypertrophy.com" />
    </Paper>
)

Comments.propTypes = {
    identifier: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Comments
