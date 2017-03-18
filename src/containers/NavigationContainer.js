import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { selectTag, selectCard } from '../actions'
import { push } from 'react-router-redux'

const debug = require('debug')('web:containers:NavigationContainer')

const onTagClick = (dispatch, name) => {
    debug(`tag ${name} clicked`)
    dispatch(selectTag(name))
    debug(`pushing url: /articles`)
    dispatch(push('/'))
}

const onCardClick = (dispatch, slug) => {
    debug(`card ${slug} clicked`)
    dispatch(selectCard(slug))
    debug(`pushing url: /articles/${slug}`)
    dispatch(push(`/articles/${slug}`))
}

const mapDispatchToProps = (dispatch) => ({
    onTagClick: name => onTagClick(dispatch, name),
    onCardClick: slug => onCardClick(dispatch, slug)
})

const NavigationContainer = connect(
    null,
    mapDispatchToProps
)(Navigation)

export default NavigationContainer