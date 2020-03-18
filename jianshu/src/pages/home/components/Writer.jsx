import React, { Component } from 'react'
import {WriterWrapper} from '../style'
import {connect} from 'react-redux'
class Writer extends Component{
    render() {
        return (
                <WriterWrapper>
                </WriterWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.home.get('WriterList')
})
export default connect(mapState,null)(Writer)