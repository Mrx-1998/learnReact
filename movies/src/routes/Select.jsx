import React, { Component } from 'react'

export default class Select extends Component {
    componentDidMount() {
        //1.成功加载3张图片

        const emptyImg = new Image();
        const selectImg = new Image()
        const soldImg = new Image()

        const count = 0
        const loadcCallback = () =>{
            count ++
            console.log(count, '3zhang');
            if(count==3){

            } 
        }

        emptyImg.onload = loadcCallback
        selectImg.onload = loadcCallback
        soldImg.onload = loadcCallback
        
        emptyImg.src = './empty.png'
        selectImg.src = './select.png'
        soldImg.src = './sold.png'
    }
    
    render() {
        return (
            <div>
                <canvas></canvas>
            </div>
        )
    }
}
