import React, { PropTypes } from 'react'
import { Grid, Row } from 'react-bootstrap'
import Jumbotron from './Jumbotron'
import TagFilter from './TagFilter'
import DetailCard from './DetailCard'
import CommentsCard from './CommentsCard'

const DetailView = ({ isFetching, card, onTagClick }) => (
    <div className="CardView">
        <Jumbotron
            title={isFetching ? 'Loading...' : card.title}
            description={isFetching ? null : card.summary}
            imageUrl={isFetching ? null : card.imageUrl} />
        <TagFilter 
            tags={isFetching ? [] : card.tags}
            onClick={onTagClick} />
        <Grid>
            <Row>
                <DetailCard isFetching={isFetching} content={card.content} />
                <CommentsCard identifier={card.slug} title={card.title} />
            </Row>
        </Grid>
    </div>
)

DetailView.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    card: PropTypes.object.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default DetailView