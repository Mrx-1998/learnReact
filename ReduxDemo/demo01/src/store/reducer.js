import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM, GET_LIST} from './actionTypes'
const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚6:30对今日代码进行review'
    ]
}  //默认数据

//state: 指的是原始仓库里的状态。
// action: 指的是action新传递的状态。
export default (state = defaultState,action)=>{  //就是一个方法函数
    console.log(state, action);
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }

    if(action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    if(action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list
        return newState
    }
    return state
}

// 我们先判断type是不是正确的，如果正确，我们需要从新声明一个变量newState。
// （记住：Reducer里只能接收state，不能改变state。）,所以我们声明了一个新变量，然后再次用return返回回去。