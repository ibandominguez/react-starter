import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const configureStore = (initialState = {}) => {
  return createStoreWithMiddleware(rootReducer, initialState)
}

export default configureStore
