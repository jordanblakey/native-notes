import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Store creation signature
// createStore(reducer, [preloadedState], [enhancer])
const Store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
)

export default Store
