import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li>列表1</li>
                    <li>列表2</li>
                    <li>列表3</li>
                    <li>列表4</li>
                    {this.state.id}
                </ul>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.match);
        this.setState({
            id:this.props.match.params.id
        })
        
    }
    
}
