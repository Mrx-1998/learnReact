import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
// import {CHANGE_INPUT, DELETE_ITEM, ADD_ITEM} from './store/actionTypes'
import { getInputChangeAction, addItem, delItem } from './store/actionCreator'
import TodoListUI from './TodoListUI'


class TodoList extends Component {
  constructor (props) {
    super(props)
    console.log(store.getState())

    this.state = store.getState()
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.del = this.del.bind(this)
    store.subscribe(this.handleStoreChange) // 监听数据发生变化


    this.add = this.add.bind(this)
  }

  handleStoreChange() {
    // console.log('store changed');
    this.setState (
      store.getState()
    )
  }

  handleInputChange(e) {
    // console.log(e);
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  add() {
    // const action = {
    //   type: ADD_ITEM,
    // }

    const action = addItem()
    store.dispatch(action)
  }

  del(index) {
    // console.log(index);
    const action = delItem(index)
    store.dispatch(action)
  }

  render() {
    return <TodoListUI
    inputValue={this.state.inputValue}     
    handleInputChange={this.handleInputChange}
    addItem={this.addItem} 
    list={this.state.list}
    delItem={this.del}  
    />
    
  }
}

export default  TodoList