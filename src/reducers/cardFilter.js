import { SET_CARD_FILTER } from '../actions'

const cardFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case SET_CARD_FILTER:
            return action.filter
        default:
            return state
    }
}

export default cardFilter