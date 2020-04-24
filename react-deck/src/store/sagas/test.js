import { call, put, fork, takeEvery, take, select } from 'redux-saga/effects'
import {testAction} from '../modules'


const sagaTest = function* () {
    while (true) {
        console.log('saga test')
        const test = yield take('test/REDUX_TEST')
    }
}


export function* test() {
    yield fork(sagaTest)
}



