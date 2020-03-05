import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './pages/Index'
import './index.css'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="mainDiv">
                    <div className="leftNav">
                        <h3>一级导航</h3>
                        <ul>
                            <li>
                                <Link to="/">首页</Link>
                            </li>
                            <li>
                                <Link to="">视频教程</Link>
                            </li>
                            <li>
                                <Link to="">职场教程</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="rightMain">
                        <Route path="/" exact component={Index}></Route>
                    </div>
                </div>
            </Router>
        )
    }
}
