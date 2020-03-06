import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import Select from './Select'
import './Details.css'
export default class Details extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className='select'>
                    <Select></Select>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
