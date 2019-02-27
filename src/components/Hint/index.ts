import { h } from 'virtual-dom'
import { isNull } from 'lodash/fp'


const Hint = hint => h('p', `user: ${isNull(hint) ? '...' : hint}`)

export default Hint
