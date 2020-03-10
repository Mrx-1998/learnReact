// useRef 获取DOM元素

import React, { useRef,useState,useEffect } from 'react'


function Example () {
    // inputEl 这个变量是useRef函数的返回值， 那么这个变量给谁当属性，就能表示
    const inputEl = useRef(null)
    const onButtonClick = () =>  {
        console.log(inputEl);
        inputEl.current.value = 'lizhihaoshuai'
    }

    const [text, setText] = useState('理智')
    const textRef = useRef()

    useEffect(() => {
        textRef.current = text
        console.log( textRef.current);
        
    })
    return (
        <div>
            <input ref={ inputEl } type="text"/>
            <button onClick={ onButtonClick }>在input展示文字</button>
            <br/>
            <input type={text} onChange={(e) => {setText(e.target.value)}}/>
        </div>
    )
}

export default Example