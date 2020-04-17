import React from "react"
import ReactDOM from "react-dom"
import Root from 'client/Root'
import {Provider} from "react-redux";
import store from 'store'


ReactDOM.render(
    // React 에 Redux 적용하기 위해 Provider 를 사용
    <Provider store={store}>
    <Root />
    </Provider>
    , document.getElementById("root")
);
