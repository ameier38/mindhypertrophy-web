import React, { PropTypes } from 'react'
import '../styles/CardView.css'

const CardView = ({ cards, tags, onTagClick }) => (
    <div className="CardView">
        <Jumbotron
            title="Train your brain"
            description="Give your brain a workout! Click an article below to learn more."
            imageUrl="/images/neurons.jpg" 
            includeLogo={true} />
        <TagFilter 
            tags={tags}
            onTagClick={onTagClick} />
        <Grid>
            <Row>
                {cards}
            </Row> 
        </Grid>
    </div>
)
CardView.propTypes = {
    cards: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default CardView