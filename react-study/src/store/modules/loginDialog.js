import {createAction, handleActions} from "redux-actions"
import { call, put, fork, takeEvery, take } from 'redux-saga/effects'

const OPEN_LOGIN = 'OPEN_LOGIN'

export const openDialog = createAction(OPEN_LOGIN, open=> {
    return open
})

const initialState = {
    open: false,
    name: ''
}

export default handleActions(
    {
        [OPEN_LOGIN] : (state, action) =>{
            return({
                ...state,
                open : true,
                name : 'loginDialog'
            })

        }
    },
    initialState
)
