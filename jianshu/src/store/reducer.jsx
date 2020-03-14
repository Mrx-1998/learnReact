import {combineReducers} from 'redux'
import {reducer as headerReducer} from '../common/header/store/reducer'
// import reducer from '../common/header/store/reducer'

const reducer = combineReducers({
    header: headerReducer
})

export default reducer