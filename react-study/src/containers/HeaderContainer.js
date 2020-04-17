import React, {Component} from "react"
import {connect} from 'react-redux'
import * as loginDialogActions from "../store/modules/loginDialog"
import {bindActionCreators} from "redux";
import Header from "../components/structure/header/Header";
import LoginDialogContainer from "./LoginDialogContainer";

class HeaderContainer extends Component {

    handleOpenDialog =() => {

        const {LoginDialogActions} = this.props
        LoginDialogActions.openDialog(true)
    }

    renderLoginDialogContainer = () =>{
        const {open} = this.props

        return (
            <LoginDialogContainer open={open}/>
        )

    }
    render() {

        const {LoginDialogActions, userId} = this.props

        return (
            <div>
               <Header userId={userId}/>
               {this.renderLoginDialogContainer()}
            </div>
        )
    }
}

export default connect(
    ({loginDialog, login}) => {
        return ({
            open: loginDialog.open,
            userId: login.user.id
        })
    },
    dispatch => ({
        LoginDialogActions: bindActionCreators(loginDialogActions,dispatch)
    })
)(HeaderContainer)
