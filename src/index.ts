import 'milligram/dist/milligram.css'
import {
  create,
  diff,
  patch,
  VNode,
} from 'virtual-dom'
import gql from 'graphql-tag'
import client from './client'
import store from './store'
import App from './components/App'


const test = gql`
  query Viewer {
    viewer {
      login
    }
  }
`

const output = document.querySelector('#root')

class VDOM {
  vdom: VNode
  root: Element

  constructor(node) {
    const { firstChild } = node
    this.vdom = App(store.getState())
    this.root = create(this.vdom)

    if (firstChild) {
      node.removeChild(firstChild)
    }

    node.appendChild(this.root)
  }

  render() {
    const newVdom = App(store.getState())
    const patches = diff(this.vdom, newVdom)
    this.root = patch(this.root, patches)
    this.vdom = newVdom
  }
}

const main = new VDOM(output)

store.subscribe(main.render.bind(main))

client
  .query({ query: test })
  .then(result => console.log(result))
