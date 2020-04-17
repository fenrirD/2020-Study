import {createAction, handleActions} from 'redux-actions'
import { call, put, fork, takeEvery, take, select } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import axios from 'axios'

// Type
const INPUT_CHANGE = 'login/INPUT_CHANGE'

const HANDLE_SUBMIT = 'login/HANDLE_SUBMIT'

const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS'

// ACTIONS
export const inputChange = createAction(INPUT_CHANGE, obj => obj)

export const handleSubmit = createAction(HANDLE_SUBMIT, obj => obj)

export const loginSuccess = createAction(LOGIN_SUCCESS, response=> response)

const loginApi  = function* (action) {

    console.log('hellow saga',action)

    const param = action.payload

    const a = yield call(() =>
        axios.post('http://localhost:8080/study01/login',param)

    )

    yield put(loginSuccess(a))

    console.log(a)
}


const initialState = {
    user: {
        id:'',
        password:'',
        status: null
    }
}


// reducer
export default handleActions(
    {
        [INPUT_CHANGE] : (state, action) => {
            return{
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }

            }
        },
        [HANDLE_SUBMIT] : (state, action) => {
            console.log(state, action)
            return{
                ...state,
            }
        },
        [LOGIN_SUCCESS] : (state, action) => {
            console.log(state, action)
            return{
                ...state,
                user :{
                    ...state.user,
                    status : action.payload.status

                }
            }
        },

    },
    initialState
)

export function* loginSaga(){
    yield takeEvery(HANDLE_SUBMIT, loginApi)
}



