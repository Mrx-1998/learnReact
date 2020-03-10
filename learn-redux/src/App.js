import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store/index'
import {CHANGE_INPUT, DELETE_ITEM, ADD_ITEM} from './store/actionTypes'



class TodoList extends Component {
  constructor (props) {
    super(props)
    console.log(store.getState())

    this.state = store.getState()
    this.handleInputChange=this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
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
    const action = {
      type: CHANGE_INPUT,
      value: e.target.value
    }
    store.dispatch(action)
  }

  add() {
    const action = {
      type: ADD_ITEM,
      
    }
    store.dispatch(action)
  }

  del(index) {
    // console.log(index);
    const action = {
      type: DELETE_ITEM,
      index
    }
    store.dispatch(action)
  }

  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
        <Input 
        placeholder={this.state.inputValue} 
        style={{width: '300px', marginRight: '10px'}}
        onChange={this.handleInputChange}
        ></Input>
        <Button type="primary" onClick={this.add}>提交</Button>
        </div>

        <div>
          <List
          style={{width: '300px', marginTop: '10px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => 
          <List.Item onClick={this.del.bind(this,index)}>{item}</List.Item>} />
        </div>
      </div>
    )
  }
}

export default  TodoList