import { combineReducers } from 'redux'
import cardDetail from './cardDetail'
import cardFilter from './cardFilter'

const cardReducer = (state = {}, action) => {
    return {
        cardFilter: cardFilter(state.cardFilter, action),
        cardDetail: cardDetail(state.cardDetail, action)
    }
}

export default cardReducer