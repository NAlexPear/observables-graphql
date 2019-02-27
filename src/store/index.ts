import { applyMiddleware, createStore, combineReducers } from 'redux'
import {
  auditTime,
  mergeMap,
  map,
} from 'rxjs/operators'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware, ofType } from 'redux-observable'
import { getOr } from 'lodash/fp'
import gql from 'graphql-tag'
import { from } from 'rxjs'
import baseClient from '../client'
import { CustomWindow } from './types'


declare const window: CustomWindow

const GET_USER = gql`
  query User($login: String!) {
    user(login: $login) {
      name
    }
  }
`

const usernameReducer = (username = '', { type, payload = '' }) => {
  switch (type) {
    case 'UPDATE_USERNAME':
      return payload
    default:
      return username
  }
}

const searchReducer = (results = '', { type, payload = '' }) => {
  switch (type) {
    case 'UPDATE_SEARCH_RESULTS':
      return payload
    default:
      return results
  }
}

const userEpic = (action$, _, { client }) => action$.pipe(
  ofType('UPDATE_USERNAME'),
  auditTime(300),
  mergeMap(({ payload: login }) => from(
    client.query({
      errorPolicy: 'ignore',
      query: GET_USER,
      variables: { login },
    })
  )),
  map(getOr('No user found!')('data.user.name')),
  map(payload => ({ type: 'UPDATE_SEARCH_RESULTS', payload })),
)

const reducers = combineReducers({
  username: usernameReducer,
  search: searchReducer,
})

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    client: baseClient,
  },
})

const initialState = {
  username: '',
}

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      epicMiddleware,
    ),
  )
)

epicMiddleware.run(userEpic)

export default store
