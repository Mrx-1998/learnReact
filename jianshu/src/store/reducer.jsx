import { combineReducers } from 'redux' //整合reducer
import {reducer as headerReducer} from '../common/header/store'
// import headerReducer from '../common/header/store/reducer'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
})

export default reducer


//整合各个小的reducer