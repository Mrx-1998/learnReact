import { createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk)) // store 已经能知道reducer

export default store