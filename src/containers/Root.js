import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../configureStore'
import initial_state from '../initial_state.json'
import App from '../components/App'
import CardViewContainer from '../containers/CardContainer'
import AboutView from '../components/AboutView'
import ContactView from '../components/ContactView'
import DetailViewContainer from '../containers/DetailViewContainer'
import NotFound from '../components/NotFound'
import { fetchAllCards, fetchAllTags } from '../actions'

const store = configureStore(initial_state)
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(fetchAllCards())
store.dispatch(fetchAllTags())

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={CardViewContainer} />
                <Route path="about" component={AboutView} />
                <Route path="contact" component={ContactView} />
                <Route path="articles/:slug" component={DetailViewContainer} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root