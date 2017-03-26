import React, { PropTypes } from 'react'
import dateFormat from 'dateformat'
import Article from './Article'
import Comments from './Comments'
import Banner from './Banner'

const ArticleView = ({ article, onTagClick }) => (
    <div className="ArticleView">
        <Banner 
            imageUrl={article.imageUrl}
            title={article.title}
            description={dateFormat(article.createdDate, 'fullDate')} />
        <div className="container">
            <Article isFetching={article.content.isFetching} markdown={article.content.markdown} /> 
            <Comments identifier={article.slug} title={article.title} />
        </div>
    </div>
)

ArticleView.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    article: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default ArticleView