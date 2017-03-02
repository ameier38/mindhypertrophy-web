import React, { PropTypes } from 'react'
import { Grid, Row } from 'react-bootstrap'
import { ThreeBounce } from 'better-react-spinkit'
import TagFilter from './TagFilter'
import Card from './Card'
import Banner from './Banner'
import '../styles/CardView.css'
import background from '../images/neurons.jpg'

const CardView = ({ isFetching, cards, onCardClick, tags, onTagClick }) => (
    <div className="CardView">
        <Banner 
            imageUrl={background}
            includeLogo={true}
            title={"Train your brain"}
            description={"Give your brain a workout! Click an article below to learn more."} />
        <TagFilter 
            tags={tags}
            onTagClick={onTagClick} />
        <Grid>
            <Row>
                { isFetching && <ThreeBounce size={50}/> }
                { !isFetching && cards.length > 0 && cards.map(card => 
                    <Card 
                        key={card.id}
                        card={card} 
                        onCardClick={() => onCardClick(card.slug)} 
                        onTagClick={onTagClick} />
                )}
            </Row> 
        </Grid>
    </div>
)
CardView.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    cards: PropTypes.array.isRequired,
    onCardClick: PropTypes.func.isRequired,
    tags: PropTypes.array.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default CardView