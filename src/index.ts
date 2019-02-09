import { Action, createStore } from 'redux'
import { CustomWindow } from './types'


declare const window: CustomWindow

const output = document.querySelector('#root')

const counterReducer = (state, { type }) => {
  switch (type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore<number, Action, {}, {}>(
  counterReducer,
  0,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
)

const increment = () => store.dispatch({ type: 'INCREMENT' })

const decrement = () => store.dispatch({ type: 'DECREMENT' })

const Counter = (count) => {
  const counter = document.createElement('h1')

  counter.textContent = `The Count is: ${count}`

  return counter
}

const Up = () => {
  const button = document.createElement('button')

  button.textContent = '+'
  button.addEventListener('click', increment)

  return button
}

const Down = () => {
  const button = document.createElement('button')

  button.textContent = '-'
  button.addEventListener('click', decrement)

  return button
}

const render = () => {
  const count = store.getState()
  const elements = [Counter, Up, Down]

  output.innerHTML = ''

  elements.forEach((Element) => {
    output.appendChild(Element(count))
  })
}

store.subscribe(render)

render()
