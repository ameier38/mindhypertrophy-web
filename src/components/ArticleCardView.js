import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import { ThreeBounce } from 'better-react-spinkit'
import ArticleCard from './ArticleCard'
import Banner from './Banner'
import background from '../images/neurons.jpg'

const articleContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}

const ArticleCardView = ({ isFetching, articles, onArticleClick, onTagClick }) => (
    <div className="ArticleCardView">
        <Banner 
            imageUrl={background}
            includeLogo={true}
            title={"Train your brain"}
            description={"Give your brain a workout! Click an article below to learn more."} />
        <Paper style={articleContainerStyle}>
            { isFetching && <ThreeBounce size={50}/> }
            { !isFetching && articles.length > 0 && articles.map(article => 
                <ArticleCard 
                    key={article.id}
                    article={article} 
                    onArticleClick={() => onArticleClick(article)} 
                    onTagClick={onTagClick} />
            )}
        </Paper>
    </div>
)
ArticleCardView.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
    onArticleClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default ArticleCardView