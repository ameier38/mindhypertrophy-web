import { SET_CARD_DETAIL } from '../actions'

const cardDetail = (state = {}, action) => {
    switch (action.type) {
        case SET_CARD_DETAIL:
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
