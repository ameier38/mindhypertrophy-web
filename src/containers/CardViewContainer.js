import { connect } from 'react-redux'
import CardView from '../components/CardView'
import { selectTag, selectCard } from '../actions'
import { push } from 'react-router-redux'

const getVisibleCards = (cards, selectedTag) => {
    if (selectedTag === 'All') {
        return cards
    }
    else {
        return cards.filter(
            card => card.tags.some(
                tag => tag.name === selectedTag
            )
        )
    }
}

const onTagClick = (dispatch, name) => {
    console.log(`tag ${name} clicked`)
    dispatch(selectTag(name))
}

const onCardClick = (dispatch, slug) => {
    dispatch(selectCard(slug))
    console.log(`pushing url: /articles/${slug}`)
    dispatch(push(`/articles/${slug}`))
}

const mapStateToProps = (state) => ({
    isFetching: state.cards.isFetching,
    tags: state.tags.items,
    cards: getVisibleCards(state.cards.items, state.selectedTag)
}) 

const mapDispatchToProps = (dispatch) => ({
    onTagClick: name => onTagClick(dispatch, name),
    onCardClick: slug => onCardClick(dispatch, slug)
})

const CardViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CardView)

export default CardViewContainer