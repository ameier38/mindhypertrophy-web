import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import reducers from './reducers'
import App from './components/App'
import CardContainer from './components/CardContainer'
import About from './components/About'
import Contact from './components/Contact'
import CardDetail from './components/CardDetail'
import NotFound from './components/NotFound'
import './app.css';

const mountNode = document.getElementById('root')
let store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
     <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={CardContainer} />
            <Route path="about" component={About} />
            <Route path="contact" component={Contact} />
            <Route path="articles/:slug" component={CardDetail} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
  </Provider>
    , mountNode
);
