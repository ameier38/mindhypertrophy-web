import { SELECT_CARD } from '../actions'

/**
 * Reducer that returns the new state of 'selectedCard'
 * which is the slug of the selected Tag.
 * @property {string} state - slug of currently selected Card
 * @property {object} action - action object
 */
const selectedCard = (state = null, action) => {
    switch (action.type) {
        case SELECT_CARD:
            return action.slug
        default:
            return state
    }
}

export default selectedCard