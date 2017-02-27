import { REQUEST_CARD_DETAIL, RECEIVE_CARD_DETAIL } from '../actions'

const default_state = {
    isFetching: false,
    requestedAt: null,
    receivedAt: null,
    item: {}
}
const cardDetail = (state = default_state, action) => {
    switch (action.type) {
        case REQUEST_CARD_DETAIL:
            return {
                ...state, 
                isFetching: true,
                requestedAt: action.requestedAt
            }
        case RECEIVE_CARD_DETAIL:
            return {
                ...state, 
                isFetching: false, 
                receivedAt: action.receivedAt,
                item: action.item
            }
        default:
            return state
    }
}

export default cardDetail