// 父子组件的传值
import React, { Component } from 'react'

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '理智'
        }
    }

    render() {
        return(
            <div>
                <p>父组件中的name： {this.state.name}</p>
                <Child name="LLL"></Child>
            </div>
        )
    }
}


class Child extends Component {
    render () {
        <div>
            <p>这是父组件传递过来的name： {this.props.name}</p>
        </div>
    }
}

export default Parent