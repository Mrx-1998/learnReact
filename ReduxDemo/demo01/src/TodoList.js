import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const data=[
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <Input placeholder="please input sth" style={{ width:'250px', marginRight:'10px'}}></Input>
                <Button type="primary">增加</Button>
                <div style={{margin:'10px',width:'300px'}}>
                    <List bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}>
                    </List>
                </div>
            </div>
        )
    }
}
