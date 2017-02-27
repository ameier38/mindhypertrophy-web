import { SELECT_TAG } from '../actions'

/**
 * Reducer that returns the new state of 'selectedTag'
 * which is the slug of the selected Tag.
 * @property {string} state - slug of currently selected Tag
 * @property {object} action - action object
 */
const selectedTag = (state = 'all', action) => {
    switch (action.type) {
        case SELECT_TAG:
            return action.slug
        default:
            return state
    }
}