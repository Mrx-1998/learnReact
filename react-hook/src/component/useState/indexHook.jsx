import React, { useState } from 'react'

//useState 就是一个hook
function Example () {
    const [ count, setCount ] = useState(0)
    let _useState = useState(0)
    return (
        <div>
            <p>你点了{count}次</p>
            <button onClick={() => {setCount(count + 1)}}>click me</button>
        </div>
    )
}


//useState 多状态
function Example2 () {
    const [ age, setAge ] = useState(18)
    const [ sex, setSex ] = useState('男')

    //react hooks 不能出现在条件判断语句中，因为他必须有完全一样的渲染顺序

    return (
        <div>
            <p>蜗牛 今年：{age} 岁</p>
            <p>性别： {sex}</p>
        </div>
    )

}


export default Example2


// hooks 本质上就是一类特殊的函数