import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import selectedTag from './selectedTag'
import selectedCard from './selectedCard'

/**
 * The root reducer which combines all the
 * reducers for the application. `combineReducers`
 * will map the state property corresponding to the 
 * name of the reducer.
 */
const rootReducer = combineReducers({
    selectedTag,
    selectedCard,
    routing: routerReducer
})

export default rootReducer