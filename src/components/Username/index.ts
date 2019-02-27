import { h } from 'virtual-dom'
import store from '../../store'


const onInput = (event) => {
  const {
    target: {
      value: payload,
    },
  } = event

  event.preventDefault()

  store.dispatch({ type: 'UPDATE_USERNAME', payload })
}

const Username = value => h(
  'form',
  [
    h(
      'input',
      {
        type: 'text',
        placeholder: 'GitHub Username',
        value,
        oninput: onInput,
      },
      []
    ),
  ]
)

export default Username
