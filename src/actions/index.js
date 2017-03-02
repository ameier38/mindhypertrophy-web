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

export const selectTag = (id) => ({
    type: SELECT_TAG, 
    id
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
        tag => ({id: tag.Id, name: tag.Name})
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
                id: card.Id,
                slug: card.Slug,
                title: card.Title,
                summary: card.Summary,
                createdDate: card.CreatedDate,
                tags: card.Tags.map(
                    tag => ({id: tag.Id, name: tag.Name})
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
        id: card.Id,
        slug: card.Slug,
        title: card.Title,
        imageUrl: card.ImageUrl,
        createdDate: card.CreatedDate,
        content: card.Content,
        tags: card.Tags.map(
            tag => ({id: tag.Id, name: tag.Name})
        )
    }
})

export const fetchAllCards = () => {
    return dispatch => {
        dispatch(requestAllCards())
        return fetch(cardApi)
            .then(response => response.json())
            .then(cards => dispatch(receiveAllCards(cards)))
    }
}

export const fetchCardDetail = (slug) => {
    return dispatch => {
        dispatch(requestCardDetail(slug))
        return fetch(`${cardApi}/${slug}`)
            .then(response => response.json())
            .then(card => dispatch(receiveCardDetail(card)))
    }
}

export const fetchAllTags = () => {
    return dispatch => {
        dispatch(requestAllTags())
        return fetch(tagApi)
            .then(response => response.json())
            .then(tags => dispatch(receiveAllTags(tags)))
    }
}