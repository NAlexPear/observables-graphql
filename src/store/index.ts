import { noop } from 'lodash/fp'
import { createStore, combineReducers } from 'redux'
import { CustomWindow } from './types'


declare const window: CustomWindow

const usernameReducer = (username = '', { type, payload = '' }) => {
  switch (type) {
    case 'UPDATE_USERNAME':
      return payload
    default:
      return username
  }
}

const reducers = combineReducers({
  username: usernameReducer,
})

const initialState = {
  username: '',
}

const store = createStore(
  reducers,
  initialState,
  (window.__REDUX_DEVTOOLS_EXTENSION__ || noop)() // eslint-disable-line no-underscore-dangle
)

export default store
