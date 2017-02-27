import { REQUEST_ALL_TAGS, RECEIVE_ALL_TAGS } from '../actions'

const default_state = {
    isFetching: false,
    requestedAt: null,
    receivedAt: null,
    items: []
}
const tags = (state = default_state, action) => {
    switch (action.type) {
        case REQUEST_ALL_TAGS:
            return {
                ...state, 
                isFetching: true,
                requestedAt: action.requestedAt
            }
        case RECEIVE_ALL_TAGS:
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

export default tags