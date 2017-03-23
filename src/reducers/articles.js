import { REQUEST_ALL_ARTICLES, RECEIVE_ALL_ARTICLES } from '../actions'

const default_state = {
    isFetching: false,
    requestedAt: null,
    receivedAt: null,
    articles: []
}

const articles = (state = default_state, action) => {
    switch (action.type) {
        case REQUEST_ALL_ARTICLES:
            return {
                ...state, 
                isFetching: true,
                requestedAt: action.requestedAt
            }
        case RECEIVE_ALL_ARTICLES:
            return {
                ...state, 
                isFetching: false, 
                receivedAt: action.receivedAt,
                articles: action.articles
            }
        default:
            return state
    }
}

export default articles