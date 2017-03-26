import React, { PropTypes } from 'react'
import ArticleCard from './ArticleCard'
import Banner from './Banner'
import LoadingArticleCard from './LoadingArticleCard'
import background from '../images/neurons.jpg'

const ArticleCardView = ({ isFetching, articles, onArticleClick, onTagClick }) => (
    <div className="ArticleCardView">
        <Banner 
            imageUrl={background}
            title="Mind Hypertrophy"
            description="Train your brain!" />
        <div className="container">
            <div className="row">
                { isFetching && [1,2].map( id =>
                    <LoadingArticleCard key={id} />
                )}
                { !isFetching && articles.length > 0 && articles.map(article => 
                    <ArticleCard 
                        key={article.id}
                        article={article} 
                        onArticleClick={() => onArticleClick(article)} 
                        onTagClick={onTagClick} />
                )}
            </div>
        </div>
    </div>
)
ArticleCardView.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
    onArticleClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default ArticleCardView