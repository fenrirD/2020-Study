import {createAction, handleActions} from "redux-actions"
import {useState} from "react";
import { call, put, fork, takeEvery, take } from 'redux-saga/effects'

const CHANGE_INPUT = 'posts/CHANGE_INPUT'
const CHANGE_INPUT2 = 'posts/CHANGE_INPUT2'

export const changeInput = createAction(CHANGE_INPUT, text => {
    return text
})

export const ch2 = createAction(CHANGE_INPUT2,text=>text)

// action
// const changeInputAsync =(value) => dispatch => {
//     console.log('saga in')
//     // setTimeout(
//     //     () => {
//     //         dispatch(changeInput(value))
//     //     },1000
//     // )
// }
const changeInputAsync = function*(value){
    while (true){
        // take -> CHANGE_INPUT 요청이 들어오기 까지 대기
        const a = yield take(CHANGE_INPUT)
        //요청이 들어온 후 dispatch 후 동작

        //ch2 실행
        yield put(ch2(a.payload))

    }

    // setTimeout(
    //     () => {
    //         dispatch(changeInput(value))
    //     },1000
    // )
}



const initialState  = {
    input: 'asd'
}

export default handleActions(

    {
        [CHANGE_INPUT] : (state, action) => {

            return ({
                ...state,
                input: action.payload
            })
        },
        [CHANGE_INPUT2] : (state, action) => {

            return({
                ...state,
                input: action.payload+'L'
            })
        }
    },
    initialState

)

export function* postSaga(){

    // fork -> saga 가 등록되고 실행됨.
    yield fork(changeInputAsync)
}
