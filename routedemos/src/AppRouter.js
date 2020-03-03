import React, { Component } from 'react'
import { BrowserRouter as Router , Link, Route } from 'react-router-dom'
import Index from './pages/Index'
import List from './pages/List'



class AppRouter extends Component {
    render () {
        return (
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/123">list</Link></li>
                </ul>
                <Route path="/" component={Index} exact></Route>
                <Route path="/list/:id" component={List}></Route>
            </Router>
        )
    }
}
export default AppRouter