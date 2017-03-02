import React, { PropTypes } from 'react'
import { Grid, Row } from 'react-bootstrap'
import { ThreeBounce } from 'better-react-spinkit'
import TagFilter from './TagFilter'
import DetailCard from './DetailCard'
import CommentsCard from './CommentsCard'
import Banner from './Banner'
import '../styles/CardView.css'

const DetailView = ({ isFetching, card, onTagClick }) => (
    <div className="CardView">
        <Banner 
            imageUrl={isFetching ? null : card.imageUrl}
            includeLogo={false}
            title={isFetching ? 'Loading...' : card.title}
            description={isFetching ? 'testing' : card.createdDate} />
        <TagFilter 
            tags={isFetching ? [] : card.tags}
            onTagClick={onTagClick} />
        <Grid>
            <Row>
                { isFetching && <ThreeBounce size={50}/> }
                { !isFetching && <DetailCard content={card.content} /> }
                { !isFetching && <CommentsCard identifier={card.slug} title={card.title} /> }
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