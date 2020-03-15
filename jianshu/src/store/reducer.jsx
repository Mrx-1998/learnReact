import { combineReducers } from 'redux' //整合reducer
import {reducer as headerReducer} from '../common/header/store'
// import headerReducer from '../common/header/store/reducer'

const reducer = combineReducers({
    header: headerReducer
})

export default reducer


//整合各个小的reducer