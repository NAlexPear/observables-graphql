import { h } from 'virtual-dom'
import Hint from '../Hint'
import Username from '../Username'


const App = ({ username, search }) => h(
  'main',
  {},
  [
    Username(username),
    Hint(search),
  ]
)

export default App
