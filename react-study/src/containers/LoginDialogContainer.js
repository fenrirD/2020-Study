import React, {Component} from "react"
import LoginDialog from "../components/dialogs/LoginDialog"
import {connect} from 'react-redux'

class LoginDialogContainer extends Component {
    render() {
        console.log(this.props,'LoginDialogContainer')
        const {open} = this.props

        return (
            <LoginDialog open={open}/>
        )
    }
}

export  default connect()(LoginDialogContainer)
