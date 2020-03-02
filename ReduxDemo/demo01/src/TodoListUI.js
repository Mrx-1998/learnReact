import React from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

const TodoListUI = (props) => {
    return (
        <div>
             <Input placeholder={props.inputValue} 
            style={{ width:'250px', marginRight:'10px'}}
            onChange={props.changeInputValue}
            ></Input>
            <Button type="primary" onClick={props.clickBtn}>增加</Button>
            <div style={{margin:'10px',width:'300px'}}>
            <List
                    bordered
                    //关键代码-----------start
                    dataSource={props.list}
                    //关键代码-----------end
                    renderItem={(item,index)=>(<List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>)}
                />  
            </div>
        </div>
    )
}

export default TodoListUI