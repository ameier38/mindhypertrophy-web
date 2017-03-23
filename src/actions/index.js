/**
 * All available actions.
 */
import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'

const host = process.env.REACT_APP_API_HOST || "localhost"
const port = process.env.REACT_APP_API_PORT || 5000
const api_url = `http://${host}:${port}/api`

export const TOGGLE_TAG = 'TOGGLE_TAG'
export const SELECT_ARTICLE = 'SELECT_ARTICLE'
export const REQUEST_ALL_TAGS = 'REQUEST_ALL_TAGS'
export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS'
export const REQUEST_ALL_ARTICLES = 'REQUEST_ALL_ARTICLES'
export const RECEIVE_ALL_ARTICLES = 'RECEIVE_ALL_ARTICLES'
export const REQUEST_ARTICLE_CONTENT = 'REQUEST_ARTICLE_CONTENT'
export const RECEIVE_ARTICLE_CONTENT = 'RECEIVE_ARTICLE_CONTENT'

/**
 * Private. Indicates tag to add or 
 * remove from the selectedTags array
 * @param {string} tagName - name of tag
 */
const _toggleTag = (tagName) => ({
    type: TOGGLE_TAG, 
    tagName
})

/**
 * Dispatches _toggleTag action then dispatches
 * push action to redirect to home route
 * @param {string} tagName 
 * @return {thunk}
 */
export const toggleTag = (tagName) => {
    return dispatch => {
        dispatch(_toggleTag(tagName))
        dispatch(push('/'))
    }
}

/**
 * Private. Indicates the article for which
 * to set selectedArticle state
 * @param {object} article 
 */
const _selectArticle = (article) => ({
    type: SELECT_ARTICLE,
    article
})

/**
 * Dispatches _selectArticle then dispatches
 * push action to redirect to article route
 * @param {string} article 
 */
export const selectArticle = (article) => {
    return dispatch => {
        dispatch(_selectArticle(article))
        dispatch(push(`/${article.slug}`))
    }
}

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

export const requestAllArticles = () => ({
    type: REQUEST_ALL_ARTICLES,
    requestedAt: Date.now()
})

export const receiveAllArticles = (articles) => {
    return({
        type: RECEIVE_ALL_ARTICLES,
        receivedAt: Date.now(),
        articles: articles.map(
            article => ({
                id: article.id,
                slug: article.slug,
                title: article.title,
                imageUrl: article.imageUrl,
                summary: article.summary,
                createdDate: article.createdDate,
                tags: article.tags.map(
                    tag => ({id: tag.id, name: tag.name})
                )
            })
        )
    })
}

export const requestArticleContent = (slug) => ({
    type: REQUEST_ARTICLE_CONTENT,
    slug,
    requestedAt: Date.now()
})

export const receiveArticleContent = (article) => ({
    type: RECEIVE_ARTICLE_CONTENT,
    receivedAt: Date.now(),
    markdown: article.markdown
})

export const fetchAllArticles = () => {
    return dispatch => {
        dispatch(requestAllArticles())
        return fetch(`${api_url}/articles`)
            .then(response => response.json())
            .then(articles => dispatch(receiveAllArticles(articles)))
    }
}

export const fetchArticleContent = (slug) => {
    return dispatch => {
        dispatch(requestArticleContent(slug))
        return fetch(`${api_url}/articles/slug/${slug}`)
            .then(response => response.json())
            .then(article => dispatch(receiveArticleContent(article)))
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