import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { toggleTag, selectArticle } from '../actions'

const debug = require('debug')('web:containers:NavigationContainer')

const onTagClick = (dispatch, name) => {
    debug(`tag ${name} clicked`)
    dispatch(toggleTag(name))
}

const onArticleClick = (dispatch, slug) => {
    debug(`card ${slug} clicked`)
    dispatch(selectArticle(slug))
}

const mapDispatchToProps = (dispatch) => ({
    onTagClick: name => onTagClick(dispatch, name),
    onArticleClick: slug => onArticleClick(dispatch, slug)
})

const mapStateToProps = (state) => ({
    tags: state.tags.tags,
    selectedTags: state.selectedTags
})

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)

export default NavigationContainer