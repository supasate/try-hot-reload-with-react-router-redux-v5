import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer } from 'react-router-redux'


const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

const rootReducer = combineReducers({
  count: countReducer,
  router: routerReducer,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>, document.getElementById('react-root'))

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter>
            <NextApp />
          </ConnectedRouter>
        </Provider>
      </AppContainer>, document.getElementById('react-root'))
  })
}
