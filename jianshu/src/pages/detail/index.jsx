import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'


class Detail extends Component {
    componentDidMount() {
        this.props.getDetail()
    }
    
    render() {
        console.log(this.props);
        
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }
}
const mapState = (state) => ({
    title: state.detail.get('title'),
    content: state.detail.get('content')
})

const mapDispatch = (dispatch) => ({
    getDetail() {
        let action = actionCreators.getDetail()
        action(dispatch)
    }
})

export default connect(mapState, mapDispatch)(Detail)