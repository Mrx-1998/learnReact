import React, { Component } from 'react'
import store from './store'
// import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'
import {changeInputAction, addItemAction, deleteItemAction, getTodoList} from './store/actionCreatores'
import TodoListUI from './TodoListUI'


export default class TodoList extends Component {
    constructor(props) {
        super(props) 

        this.state=store.getState()
        console.log(this.state);

        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        
    }

    storeChange(){//重新把state的数据替换到state中来
        this.setState(store.getState())
    }

    //想改变Redux里边State的值就要创建Action了。
    //Action就是一个对象，这个对象一般有两个属性，第一个是对Action的描述，第二个是要改变的值。
    changeInputValue(e) {
        // console.log(e.target.value);
        // const action = {
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // }

        const action = changeInputAction(e.target.value)
        //action就创建好了，但是要通过dispatch()方法传递给store。
        store.dispatch(action)
    }

    clickBtn() {
        // const action = {
        //     type: ADD_ITEM
        // }
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {        
        // const action = {
        //     type: DELETE_ITEM,
        //     index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    render() {
        return (
            <div>
               <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                deleteItem={this.deleteItem}
               ></TodoListUI>
            </div>
        )
    }

    componentDidMount(){
        // axios.get('https://www.studyinghome.com/mock/5e5c821883482d5224c00347/list').then((res)=>{
        //     console.log(res,'-----------------------------res')
        //     const action =  getItemAction(res.data)
        //     store.dispatch(action)
        // })
        const action = getTodoList()
        store.dispatch(action)
    }
}
