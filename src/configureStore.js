import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

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
            routerMiddleware(browserHistory),
            createLogger()
        )
    )
}

export default configureStore