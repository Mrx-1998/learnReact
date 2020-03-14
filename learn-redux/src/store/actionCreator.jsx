import {CHANGE_INPUT, DELETE_ITEM, ADD_ITEM} from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT,
    value: value
})

export const addItem = (value) => ({
    type: ADD_ITEM,
})

export const delItem = (index) => ({
    type: DELETE_ITEM,
    index
})


