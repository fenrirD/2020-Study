import {createAction, handleActions} from "redux-actions"
import { call, put, fork, takeEvery, take } from 'redux-saga/effects'

const CLICK_TITLE = 'redux/CLICK_TITLE'

export const onClickTitle = createAction(CLICK_TITLE, id =>{
    console.log('action in',CLICK_TITLE, id)
    return id
})

const onClickTitleSaga = function*(action) {
    console.log('onClickTitleSaga in')
    while (true){
        const action = yield take(CLICK_TITLE)
        console.log('onClickTitleSaga', action)
    }

}


const initialState = {
    lists: [
        {
            id:1,
            title: 'Redux - Title 1',
            content: 'Redux - Content 1',
            img: 'public/logo192.png'
        },
        {
            id:2,
            title : 'Redux - Title 2',
            content: 'Redux - Content 2',
            img: 'public/logo192.png'
        },
        {
            id:3,
            title: 'Redux - Title 3',
            content: 'Redux - Content 3',
            img: 'public/logo192.png'
        },
        {
            id:4,
            title : 'Redux - Title 4',
            content: 'Redux - Content 4',
            img: 'public/logo192.png'
        },
    ]
}

export default handleActions({

        [CLICK_TITLE] : (state, action) => {
            console.log('handle Actions')
            return ({
                ...state

            })
        }
    },
    initialState
)

export function* reduxSaga(){

    // fork -> saga 가 등록되고 실행됨.
    yield fork(onClickTitleSaga)
}

