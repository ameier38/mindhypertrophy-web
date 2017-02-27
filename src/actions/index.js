/**
 * All available actions.
 */
import fetch from 'isomorphic-fetch'

const cardApi = process.env.REACT_APP_CARD_API;
const tagApi = process.env.REACT_APP_TAG_API;

export const SELECT_TAG = 'SELECT_TAG'
export const SELECT_CARD = 'SELECT_CARD'
export const REQUEST_ALL_TAGS = 'REQUEST_ALL_TAGS'
export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS'
export const REQUEST_ALL_CARDS = 'REQUEST_ALL_CARDS'
export const RECEIVE_ALL_CARDS = 'RECEIVE_ALL_CARDS'
export const REQUEST_CARD_DETAIL = 'REQUEST_CARD_DETAIL'
export const RECEIVE_CARD_DETAIL = 'RECEIVE_CARD_DETAIL'
export const FILTER_CARDS_BY_TAG = 'FILTER_CARDS_BY_TAG'

export const selectTag = (slug) => ({
    type: SELECT_TAG, 
    slug
})

export const selectCard = (slug) => ({
    type: SELECT_CARD,
    slug
})

export const requestAllTags = () => ({
    type: REQUEST_ALL_TAGS,
    requestedAt: Date.now()
})

export const receiveAllTags = (json) => ({
    type: RECEIVE_ALL_TAGS,
    items: json.tags,
    receivedAt: Date.now()
})

export const requestAllCards = () => ({
    type: REQUEST_CARDS,
    requestedAt: Date.now()
})

export const receiveAllCards = (json) => ({
    type: RECEIVE_CARDS,
    items: json.cards,
    receivedAt: Date.now()
})

export const requestCardDetail = (slug) => ({
    type: REQUEST_CARD_DETAIL,
    slug,
    requestedAt: Date.now()
})

export const receiveCardDetail = (json) => ({
    type: RECEIVE_CARD_DETAIL,
    item: json.cardDetail,
    receivedAt: Date.now()
})

export const filterCardsByTag = (tagName) => ({
    type: FILTER_CARDS_BY_TAG,
    tagName
})

export const fetchAllCards = () => {
    return dispatch => {
        dispatch(requestAllCards())
        return fetch(cardApi)
            .then(response => dispatch(receiveAllCards(response)))
    }
}

export const fetchCardDetail = (slug) => {
    return dispatch => {
        dispatch(requestCardDetail(slug))
        return fetch(`${cardApi}/articles/${slug}`)
            .then(response => dispatch(receiveCardDetail(response)))
    }
}

export const fetchAllTags = () => {
    return dispatch => {
        dispatch(requestAllTags())
        return fetch(tagApi)
            .then(response => dispatch(receiveAllTags(response)))
    }
}