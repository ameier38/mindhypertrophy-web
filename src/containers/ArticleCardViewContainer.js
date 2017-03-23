import { connect } from 'react-redux'
import ArticleCardView from '../components/ArticleCardView'
import { toggleTag, selectArticle } from '../actions'

const debug = require('debug')('web:containers:ArticleCardViewContainer')

const getVisibleArticles = (articles, selectedTags) => {
    return articles.filter(
        article => article.tags.some(
            articleTag => selectedTags.some(
                selectedTag => selectedTag === articleTag
            )
        )
    )
}

const onTagClick = (dispatch, tagName) => {
    debug(`tag ${tagName} clicked`)
    dispatch(toggleTag(tagName))
}

const onArticleClick = (dispatch, article) => {
    debug(`article ${article.slug} clicked`)
    dispatch(selectArticle(article))
}

const mapStateToProps = (state) => ({
    isFetching: state.articles.isFetching,
    articles: getVisibleArticles(state.articles.articles, state.selectedTags)
}) 

const mapDispatchToProps = (dispatch) => ({
    onTagClick: tagName => onTagClick(dispatch, tagName),
    onArticleClick: slug => onArticleClick(dispatch, slug)
})

const ArticleCardViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleCardView)

export default ArticleCardViewContainer