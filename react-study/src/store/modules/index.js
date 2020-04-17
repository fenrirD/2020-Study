import { combineReducers} from "redux"
import about from "./about"
import post from "./post"
import reduxStudyLists from "./reduxStudyLists"
import loginDialog from './loginDialog'
import login from'./login'
// 리듀서를 등록 및 합치는 과정

export default combineReducers({
    reduxStudyLists,
    about,
    post,
    loginDialog,
    login,

})
