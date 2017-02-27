import { RECEIVE_CARD_DETAIL } from '../actions'

const selectedCardDetail = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CARD_DETAIL:
            return {
                id: action.id,
                slug: action.slug,
                createdDate: action.createdDate,
                title: action.title,
                summary: action.summary,
                imageUrl: action.imageUrl,
                content: action.content
            }
        default:
            return state
    }
}

export default cardDetail
