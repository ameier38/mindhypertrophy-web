import React, { PropTypes } from 'react';
import dateFormat from 'dateformat'
import TagBox from './TagBox';
import '../styles/ArticleCard.css'

const ArticleCard = ({ article, onArticleClick, onTagClick }) => (
    <div className="ArticleCard col s12 m6" onClick={onArticleClick}>
        <div className="card">
            <div className="card-content">
                <span className="card-title">{article.title}</span>
                <span className="card-subtitle">{dateFormat(article.createdDate, 'fullDate')}</span>
                <p>{article.summary}</p>
            </div>
            <div className="card-action">
                <TagBox tags={article.tags} onTagClick={onTagClick} />
            </div>
        </div>
    </div>
)

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired,
    onArticleClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default ArticleCard
