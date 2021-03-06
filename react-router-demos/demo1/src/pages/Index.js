import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {uid:123,title:'技术胖的个人博客-1'},
                {uid:456,title:'技术胖的个人博客-2'},
                {uid:789,title:'技术胖的个人博客-3'},
            ]
         }
    }
    render() {
        return (
            <div>
                <ul>
                {this.state.list.map((item,index) => (
                    <li  key={index}>
                        <Link to={'/list/'+ item.uid}>{item.title}</Link>
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}
