export const SET_CARD_FILTER = 'SET_CARD_FILTER'
export const SET_CARD_DETAIL = 'SET_CARD_DETAIL'

export const setCardFilter = (filter) => ({
    type: SET_CARD_FILTER, 
    filter
})

export const setCardDetail = (id, slug, createdDate, title, summary, imageUrl, content) => ({
    type: SET_CARD_DETAIL, 
    id,
    slug,
    createdDate,
    title,
    summary,
    imageUrl,
    content
})

const requestCards = (tagName) => ({
    type: REQUEST_CARDS,
    tagName
})

const receiveCards = (tagName, json) => ({
    type: RECEIVE_CARDS,
    tagName,
    cards: json.data.cards,
    receivedAt: Date.now()
})