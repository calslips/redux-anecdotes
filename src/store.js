import { createStore } from 'redux'
import anecdotes from './reducers/anecdoteReducer'
import notification from './reducers/notificationReducer'
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({ anecdotes, notification })

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

export default store;
