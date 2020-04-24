import {all} from 'redux-saga/effects'
import {test} from './test'

export default function* rootSagas() {
    yield all([test()])
}
