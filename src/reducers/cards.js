import { REQUEST_ALL_CARDS, RECEIVE_ALL_CARDS } from '../actions'

const default_state = {
    isFetching: false,
    requestedAt: null,
    receivedAt: null,
    items: []
}
const cards = (state = default_state, action) => {
    switch (action.type) {
        case REQUEST_ALL_CARDS:
            return {
                ...state, 
                isFetching: true,
                requestedAt: action.requestedAt
            }
        case RECEIVE_ALL_CARDS:
            return {
                ...state, 
                isFetching: false, 
                receivedAt: action.receivedAt,
                items: action.items
            }
        default:
            return state
    }
}

export default cards