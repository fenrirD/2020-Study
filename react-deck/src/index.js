import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router'
import Main from './components/main'
import store from './store'

ReactDOM.render(
    // redux 를 사용하기 위해서 추가
    <Provider store={store}>
        <BrowserRouter> {/*headerRoute 사용*/}
            <Route path='/' component={Main} />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

