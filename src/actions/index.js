/**
 * All available actions.
 */
import fetch from 'isomorphic-fetch'

const host = process.env.REACT_APP_API_HOST
const api_url = `http://${host}/api`

export const SELECT_TAG = 'SELECT_TAG'
export const SELECT_CARD = 'SELECT_CARD'
export const REQUEST_ALL_TAGS = 'REQUEST_ALL_TAGS'
export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS'
export const REQUEST_ALL_CARDS = 'REQUEST_ALL_CARDS'
export const RECEIVE_ALL_CARDS = 'RECEIVE_ALL_CARDS'
export const REQUEST_CARD_DETAIL = 'REQUEST_CARD_DETAIL'
export const RECEIVE_CARD_DETAIL = 'RECEIVE_CARD_DETAIL'
export const FILTER_CARDS_BY_TAG = 'FILTER_CARDS_BY_TAG'

export const selectTag = (name) => ({
    type: SELECT_TAG, 
    name
})

export const selectCard = (slug) => ({
    type: SELECT_CARD,
    slug
})

export const requestAllTags = () => ({
    type: REQUEST_ALL_TAGS,
    requestedAt: Date.now()
})

export const receiveAllTags = (tags) => ({
    type: RECEIVE_ALL_TAGS,
    receivedAt: Date.now(),
    items: tags.map(
        tag => ({id: tag._id, name: tag.name})
    )
})

export const requestAllCards = () => ({
    type: REQUEST_ALL_CARDS,
    requestedAt: Date.now()
})

export const receiveAllCards = (cards) => {
    return({
        type: RECEIVE_ALL_CARDS,
        receivedAt: Date.now(),
        items: cards.map(
            card => ({
                id: card._id,
                slug: card.slug,
                title: card.title,
                summary: card.summary,
                createdDate: card.createdDate,
                tags: card.tags.map(
                    tag => ({id: tag._id, name: tag.name})
                )
            })
        )
    })
}

export const requestCardDetail = (slug) => ({
    type: REQUEST_CARD_DETAIL,
    slug,
    requestedAt: Date.now()
})

export const receiveCardDetail = (card) => ({
    type: RECEIVE_CARD_DETAIL,
    receivedAt: Date.now(),
    item: {
        id: card._id,
        slug: card.slug,
        title: card.title,
        imageUrl: card.imageUrl,
        createdDate: card.createdDate,
        content: card.content,
        tags: card.tags.map(
            tag => ({id: tag._id, name: tag.name})
        )
    }
})

export const fetchAllCards = () => {
    return dispatch => {
        dispatch(requestAllCards())
        return fetch(`${api_url}/cards`)
            .then(response => response.json())
            .then(cards => dispatch(receiveAllCards(cards)))
    }
}

export const fetchCardDetail = (slug) => {
    return dispatch => {
        dispatch(requestCardDetail(slug))
        return fetch(`${api_url}/cards/${slug}`)
            .then(response => response.json())
            .then(card => dispatch(receiveCardDetail(card)))
    }
}

export const fetchAllTags = () => {
    return dispatch => {
        dispatch(requestAllTags())
        return fetch(`${api_url}/tags`)
            .then(response => response.json())
            .then(tags => dispatch(receiveAllTags(tags)))
    }
}