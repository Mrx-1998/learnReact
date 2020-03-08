// useMemo 优化React Hooks 程序的性能

import React, { useState, useMemo } from 'react'

function Example () {
    const [wn, setWn] = useState('蜗牛coding')
    const [zm, setZm] = useState('猛哥coding')

    return (
        <>
            <button onClick={() => {setWn(new Date().getTime())}}>蜗牛</button>
            <button onClick={() => {setZm(new Date().getTime()  + 'meng')}}>蒙哥</button>
            <ChildComponent name={zm}>{wn}</ChildComponent>
        </>
    )
}

function ChildComponent ({name, children}) {
    function changeZm (name) {
        console.log('他来了，猛哥向我们做来的');
        return name + '，猛哥来了'
    }

    const actionZm = useMemo(() => changeZm(name), [name])

    return (
        <div>
            <div>{actionZm}</div>
            <div>{children}</div>
        </div>
    )
}

export default Example