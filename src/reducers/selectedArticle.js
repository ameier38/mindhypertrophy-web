import { SELECT_ARTICLE, REQUEST_ARTICLE_CONTENT, RECEIVE_ARTICLE_CONTENT } from '../actions'

const defaultState = {
    id: null,
    slug: "",
    createdDate: "",
    imageUrl: "",
    title: "",
    summary: "",
    content: {
        isFetching: null,
        requestedAt: "",
        receivedAt: "",
        markdown: ""
    },
    tags: []
}

/**
 * Reducer for content portion of
 * selectedArticle state
 * @param {object} state 
 * @param {object} action 
 */
const contentReducer = (state, action) => {
    switch (action.type) {
        case REQUEST_ARTICLE_CONTENT:
            return {
                ...state,
                isFetching: true,
                requestedAt: action.requestedAt
            }
        case RECEIVE_ARTICLE_CONTENT:
            return {
                ...state,
                isFetching: false,
                receivedAt: action.receivedAt,
                markdown: action.markdown
            }
        default:
            return state
    }
}

/**
 * Reducer that returns the new state of 'selectedArticle'
 * @property {string} state - currently selected Article
 * @property {object} action - action object
 */
const selectedArticle = (state = defaultState, action) => {
    switch (action.type) {
        case SELECT_ARTICLE:
            return {
                ...state,
                ...action.article
            }
        case REQUEST_ARTICLE_CONTENT:
        case RECEIVE_ARTICLE_CONTENT:
            return {
                ...state,
                content: contentReducer(state.content, action)
            }
        default:
            return state
    }
}

export default selectedArticle