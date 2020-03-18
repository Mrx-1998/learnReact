import * as types from './actionTypes'
 //将js转化为immutable
import { fromJS } from 'immutable'
const defaultState = fromJS({ //将里面数据转为immutable，不可被修改
    focused: false
})

export default (state = defaultState, action) => {
    if(action.type === types.SEARCH_FOCUS){
        //immutable 对象的set方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused', true) 

    }
    if(action.type === types.SEARCH_BLUR){
        return state.set('focused', false)
    }
    return state
}