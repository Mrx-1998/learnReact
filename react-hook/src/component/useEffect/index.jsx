// 副作用 hooks模式下 （state） 发生变更的时候提供给我们做额外操作
import React, { Component } from 'react'

class Example extends Component{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.addCount = this.addCount.bind(this)
    }

    addCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        console.log(`componentDidMount => 你点击了 ${this.state.count}`);
        
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(`componentDidUpdate => 你点击了 ${this.state.count}`);
        
    }
    
    

    render () {
        return (
            <div>
                <p>你点了{this.state.count}次</p>
                <button onClick={this.addCount}>click me</button>
            </div>
        )
    }
}

export default Example