import { TOGGLE_TAG } from '../actions'

/**
 * Reducer that returns the new state of 'selectedTag'
 * which is the slug of the selected Tag.
 * @property {string} state - slug of currently selected Tag
 * @property {object} action - action object
 */
const selectedTags = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_TAG:
            const tagName = action.tagName
            if (state.includes(tagName)) {
                return state.filter(name => name !== tagName)
            }
            else{
                return [...state, tagName]
            }
        default:
            return state
    }
}

export default selectedTags