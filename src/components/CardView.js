import React, { PropTypes } from 'react'
import '../styles/CardView.css'

const CardView = ({ isFetching, cards, onCardClick, tags, onTagClick }) => (
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
                { isFetching && <ThreeBounce size={50}/> }
                { !isFetching && cards.map(card => 
                    <Card 
                        key={card.id} 
                        id={card.id}
                        slug={card.slug}
                        title={card.title} 
                        summary={card.summary} 
                        createdDate={card.createdDate} 
                        tags={card.tags}
                        onClick={onCardClick}
                    />
                )}
            </Row> 
        </Grid>
    </div>
)
CardView.propTypes = {
    cards: PropTypes.array.isRequired,
    onCardClick: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default CardView