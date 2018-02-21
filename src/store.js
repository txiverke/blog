import { createStore, compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk'

import reducer from "./reducers"
import config from './config'

const env = config.env === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : ''

const store = createStore(
  reducer,
  env,
  compose(applyMiddleware(thunk)),
);

export default store