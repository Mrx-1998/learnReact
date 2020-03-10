import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer) // store 已经能知道reducer

export default store