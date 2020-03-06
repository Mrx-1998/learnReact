// componentWillUnmount 组件卸载之前
// useEffect 实现componentWillUnmount (解绑副作用)

import {BrowserRouter as Router , Link, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function Example () {
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        console.log(`componentDidMount => 你点击了 ${count}`);
    },[count])

    return (
        <div>
            <p>你点了{ count }次</p>
            <button onClick={ () => { setCount ( count + 1 ) } }>click me</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                </ul>
                <Route exact path="/" component={Index}></Route>
                <Route path="/list" component={List}></Route>
            </Router>
        </div>
    )
}

function Index () {
    useEffect(() => {
        console.log('useEffect => index页面');
        return () => {
            console.log('离开了Index页面');
        }
    }, []) //空数组当组件被销毁时解绑
    return (
        <h2>lm开发团</h2>
    )
}

function List () {
    useEffect(() => {
        console.log('useEffect => List页面');
        
    })
    return <h2>list-page</h2>
}

export default Example