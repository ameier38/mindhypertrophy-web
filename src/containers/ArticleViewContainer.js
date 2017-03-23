import React, { Component, PropTypes } from 'react'
import ArticleView from '../components/ArticleView'
import { connect } from 'react-redux'
import { selectTag, requestArticleContent, fetchArticleContent } from '../actions'

const debug = require('debug')('web:containers:ArticleViewContainer')

const mapStateToProps = (state, ownProps) => ({
    routeSlug: ownProps.params.slug,
    article: state.selectedArticle
})

const mapDispatchToProps = (dispatch) => ({
    onTagClick: tagName => dispatch(selectTag(tagName)),
    requestArticleContent: slug => dispatch(requestArticleContent(slug)),
    fetchArticleContent: slug => dispatch(fetchArticleContent(slug))
})

class ArticleViewContainer extends Component {
    componentDidMount() {
        const { requestArticleContent, fetchArticleContent, routeSlug } = this.props
        debug(`Requesting article content:${routeSlug}`)
        requestArticleContent(routeSlug)
        fetchArticleContent(routeSlug)
    }
    render() {
        const { onTagClick, article } = this.props
        const { isFetching } = article.content
        return (
            <div>
                { !isFetching && 
                    <ArticleView 
                        article={article} 
                        onTagClick={onTagClick} />
                }
            </div>
        )
    }
}

ArticleViewContainer.propTypes = {
    routeSlug: PropTypes.string.isRequired,
    article: PropTypes.object.isRequired,
    onTagClick: PropTypes.func.isRequired,
    requestCardDetail: PropTypes.func.isRequired,
    fetchArticleContent: PropTypes.func.isRequired
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleViewContainer)