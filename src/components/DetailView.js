import React, { PropTypes } from 'react'
import { Grid, Row } from 'react-bootstrap'
import Jumbotron from './Jumbotron'
import TagFilter from './TagFilter'
import DetailCard from './DetailCard'
import CommentsCard from './CommentsCard'
import '../styles/CardView.css'

const DetailView = ({ isFetching, detailCard, onTagClick }) => (
    <div className="CardView">
        <Jumbotron
            title={detailCard.title}
            description={detailCard.summary}
            imageUrl={detailCard.imageUrl} />
        <TagFilter 
            tags={detailCard.tags}
            onClick={onTagClick} />
        <Grid>
            <Row>
                <DetailCard isFetching={isFetching} content={detailCard.content} />
                <CommentsCard identifier={detailCard.slug} title={detailCard.title} />
            </Row>
        </Grid>
    </div>
)

DetailView.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    detailCard: PropTypes.object.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default DetailView