import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import * as service from './service'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export { store }

const thunks = {
  loadInfo: () => {
    return (dispatch) => {
      dispatch({
        type: 'load',
      })

      return service.loadInfo()
        .then((user) => {
          dispatch({
            type: 'load-success',
            user,
          })
        })
    }
  },
}

export { thunks }
