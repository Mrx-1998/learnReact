import { createStore } from 'redux'  // 引入createStore方法
import reducer from './reducer'         //引入reducer
const store = createStore(reducer)          // 创建数据存储仓库,j将reducer作为参数传入
export default store                 //暴露出去