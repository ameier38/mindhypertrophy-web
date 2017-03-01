import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import selectedTag from './selectedTag'
import selectedCard from './selectedCard'
import cards from './cards'
import tags from './tags'
import cardDetail from './cardDetail'


/**
 * The root reducer which combines all the
 * reducers for the application. `combineReducers`
 * will map the state property corresponding to the 
 * name of the reducer.
 */
const rootReducer = combineReducers({
    selectedTag,
    selectedCard,
    cards,
    tags,
    cardDetail,
    routing: routerReducer
})

export default rootReducer