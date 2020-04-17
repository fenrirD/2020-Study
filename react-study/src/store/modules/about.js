import { call, put, fork } from 'redux-saga/effects'


const CHANGE_NAME ='about/CHANGE_NAME'
const INCREMENT ='about/INCREMENT'
const DECREMENT ='about/DECREMENT'

//액션 함수
export const changeName = name => ({
    type: CHANGE_NAME,
    name
})
export const increment = (action) => {
    console.log('action',action)

   return (

    {
        type: INCREMENT,
        payload : 1
    }
)
}

export const  decrement = () => ({
    type: DECREMENT
})

// 상태의 초기상태.
const initialState = {
    name : 'Lee',
    number : 0
}

export default function about(state = initialState, action) {
    console.log(state,'dispatch')
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.name
            }
        case INCREMENT:
            console.log('about increment')
            return {
                ...state,
                number: state.number + 1
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        default: return state

    }
}

export function* aboutSaga() {
    console.log('saga')
    yield fork(increment)
}
