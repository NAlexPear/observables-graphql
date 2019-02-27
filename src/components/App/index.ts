import { h } from 'virtual-dom'
import Username from '../Username'


const App = ({ username }) => h('main', {}, [Username(username)])

export default App
