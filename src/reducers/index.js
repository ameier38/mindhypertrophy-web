import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import selectedTags from './selectedTags'
import selectedArticle from './selectedArticle'
import articles from './articles'
import tags from './tags'


/**
 * The root reducer which combines all the
 * reducers for the application. `combineReducers`
 * will map the state property corresponding to the 
 * name of the reducer.
 */
const rootReducer = combineReducers({
    tags,
    selectedTags,
    articles,
    selectedArticle,
    routing: routerReducer
})

export default rootReducer