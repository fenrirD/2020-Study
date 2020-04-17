import React, {Component} from "react"
import {Login} from "../pages"
import {connect} from 'react-redux'
import {Route, Switch, Redirect} from "react-router-dom"

import {bindActionCreators} from "redux";
import * as loginActions from "../store/modules/login";

class LoginContainer extends Component {

    componentDidMount() {
        const {user,history} = this.props
        console.log(this.props,'야임마')
        user.status === 200 ? history.push('/') : console.log('1')
    }





    handleChange = (e) => {
        const {LoginActions} = this.props
        console.log(e.target.value, e.target.id)
        let input = {
            [e.target.id] : e.target.value
        }
        LoginActions.inputChange(input)
    }




    render() {

        const {match, history, user, LoginActions,  } = this.props

        return (
            user.status === 200 ?
            <Redirect to="/" push />:
            <Login match={match} history={history}
        param={user} handleChange={this.handleChange} handleSubmit={() =>{LoginActions.handleSubmit(user)}}/>

        )
    }


}



export default connect(
    ({login}) => ({
        user: login.user
    }),
    dispatch =>({
        LoginActions : bindActionCreators(loginActions, dispatch)
    })
)(LoginContainer)
