import { connect } from 'react-redux'
import CardView from '../components/CardView'
import { selectTag, selectCard } from '../actions'

const getVisibleCards = (cards, selectedTag) => {
    if (selectTag === "All"){
        return cards
    }
    else {
        return cards.filter(
            card => {
                return card.tags.some(
                    tag => tag.id === selectedTag
                )
            }
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.cards.isFetching,
    tags: state.tags.items,
    cards: getVisibleCards(state.cards.items, state.selectedTag)
})

const mapDispatchToProps = (dispatch) => ({
    onTagClick: (slug) => dispatch(selectTag(slug)),
    onCardClick: (slug) => dispatch(selectCard(slug))
})

const CardViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardView)

export default CardViewContainer