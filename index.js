import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import quotesApp from './reducers'
import thunkMiddleware from 'redux-thunk'
import api from './middleware/api'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)

let store = createStoreWithMiddleware(quotesApp)

let rootElement = document.getElementById('root')

const router = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
)

render(router, rootElement);
