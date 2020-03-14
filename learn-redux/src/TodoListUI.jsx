import React ,{Component}from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{marginTop: '10px', marginLeft: '10px'}}>
//                 <div>
//                 <Input 
//                 placeholder={this.props.inputValue} 
//                 style={{width: '300px', marginRight: '10px'}}
//                 onChange={this.props.handleInputChange}
//                 ></Input>
//                 <Button type="primary" onClick={this.props.add}>提交</Button>
//                 </div>

//                 <div>
//                 <List
//                 style={{width: '300px', marginTop: '10px'}}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item,index) => 
//                 <List.Item onClick={(index) => {this.props.delItem(index)}}>{item}</List.Item>} />
//                 </div>
//             </div>
//         )
//     }
// }



const TodoListUI = (props) => {
    console.log(props.list);
    return (
        <div>
             <Input placeholder={props.inputValue} 
            style={{ width:'250px', marginRight:'10px'}}
            onChange={props.changeInputValue}
            ></Input>
            <Button type="primary" onClick={props.addItem}>增加</Button>
            <div style={{margin:'10px',width:'300px'}}>
            <List
                    bordered
                    //关键代码-----------start
                    dataSource={props.list}
                    //关键代码-----------end
                    renderItem={(item,index)=>(<List.Item onClick={()=>{props.delItem(index)}}>{item}</List.Item>)}
                />  
            </div>
            
        </div>
    )
}

export default TodoListUI