import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

/**
 * Configure the data store for the application.
 * @property {object} preloadedState - the initial state of the app
 */
const configureStore = (preloadedState) => {
    return createStore(
        rootReducer, 
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}

export default configureStore