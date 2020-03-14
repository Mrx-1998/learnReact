import { createStore, applyMiddleware, compose } from 'redux'  // 引入createStore方法
import reducer from './reducer'         //引入reducer
import thunk from 'redux-thunk'

const composeEnhanders = 
    window._REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ ?
    window._REDUX_DEVTOOLS_EXTENSTION_COMPOSE__({

    }) : compose;

const enhancer = composeEnhanders(
    applyMiddleware(thunk)
)

const store = createStore(
    reducer,
    enhancer
    )          // 创建数据存储仓库,j将reducer作为参数传入


export default store                 //暴露出去