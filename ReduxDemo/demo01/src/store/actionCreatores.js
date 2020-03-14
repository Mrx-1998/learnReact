import {CHANGE_INPUT , ADD_ITEM, DELETE_ITEM, GET_LIST}  from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getItemAction = (data)=>({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.studyinghome.com/mock/5e5c821883482d5224c00347/list').then((res)=>{
            console.log(res,'-----------------------------res')
            const action =  getItemAction(res.data)
            dispatch(action)
        })
    }
}