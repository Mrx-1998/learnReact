import {CHANGE_INPUT, DELETE_ITEM, ADD_ITEM} from './actionTypes'

const defaultState = {
    inputValue: 'redux',
    list:[
        1,2,3
    ]
}

//state 指的是store里面上一次存储的数据

//JSON.parse() 方法用于将一个 JSON 字符串转换为对象
export default(state = defaultState, action) => {
    if(action.type === CHANGE_INPUT) {
        const newState = JSON.parse(JSON.stringify(state)) // reducer 可以接受state但是不能修改state
        newState.inputValue = action.value
        // newState.list.push(action.value)
        return newState 
    }
    // console.log(state, action);

    if(action.type === ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState 
    }
    
    if(action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState 
    }

    return state
}