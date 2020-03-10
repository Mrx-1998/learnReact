// useRef 获取DOM元素

import React, { useRef } from 'react'


function Example () {
    // inputEl 这个变量是useRef函数的返回值， 那么这个变量给谁当属性，就能表示
    const inputEl = useRef(null)
    const onButtonClick = () =>  {
        console.log(inputEl);
        inputEl.current.value = 'lizhihaoshuai'
    }
    return (
        <div>
            <input ref={ inputEl } type="text"/>
            <button onClick={ onButtonClick }>在input展示文字</button>
        </div>
    )
}

export default Example