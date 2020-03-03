import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function List() {
    return (
        <>
        <h3>列表1</h3>
        <h3>列表2</h3>
        <h3>列表3</h3>
        </>
    )
}

function Index() {
    return (
        <>
        <h2>首页</h2>
        </>
    )
}

class AppRouter extends Component {
    redner() {
        <Router>
            <Link to="/">首页</Link>
            <Link to="/list/">list</Link>
        </Router>
    }
}