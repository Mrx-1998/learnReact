//将js转化为immutable
import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({ //将里面数据转为immutable，不可被修改
    title: '',
    content: ''
})


export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }

}