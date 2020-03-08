// useContext 让父子组件传值变得更简单
import React, { useState,  useContext, createContext } from 'react'

const CountContext = createContext()

function Example () {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>你点了{count}</p>
            <button onClick={ () => { setCount ( count + 1 ) } }>click me</button>
            <CountContext.Provider value={count}>
                <Count></Count>
            </CountContext.Provider>
        </div>
    )
}

function Count () {
    const count = useContext(CountContext)
    return (
        <h2>{count}</h2>
    )
}

export default  Example