import React, { PropTypes } from 'react';
import dateFormat from 'dateformat'
import TagBox from './TagBox';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider'

const ArticleCard = ({ article, onArticleClick, onTagClick }) => (
    <Card>
        <CardTitle title={article.title} subtitle={dateFormat(article.createdDate, 'fullDate')} />
        <CardText>
            {article.summary}
        </CardText>
        <Divider />
        <TagBox tags={article.tags} onTagClick={onTagClick} />
    </Card>
)

ArticleCard.propTypes = {
    article: PropTypes.object.isRequired,
    onArticleClick: PropTypes.func.isRequired,
    onTagClick: PropTypes.func.isRequired
}

export default ArticleCard
