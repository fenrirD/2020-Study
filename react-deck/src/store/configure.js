import {applyMiddleware, createStore, compose} from 'redux'
import modules from './modules'
import createSagaMiddleware from 'redux-saga'
import rootSagas from "./sagas";
/*
    configure.js
    redux, reducer 등 미들 웨어 설정을 담당

 */

const configure = () => {
    // saga 등록
    const sagaMiddleware = createSagaMiddleware()

    // chrome redux 개발자 도구를 사용 가능하게
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(modules, composeEnhancers(applyMiddleware(sagaMiddleware)))
    //  param reducer , middleware...

    //saga start
    sagaMiddleware.run(rootSagas)

    return store
}

export default configure

