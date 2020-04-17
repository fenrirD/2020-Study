import React, {Component} from "react"
import {connect} from 'react-redux'
import { bindActionCreators} from "redux"
import ReduxStudyLists from "components/reduxStudy/ReduxStudyLists"
import * as reduxStudyListsActions from 'store/modules/reduxStudyLists'



class ReduxStudyListsContainer extends Component {
    onClickTitle = e => {
        console.log('asd', this.props)
        const {reduxActions} = this.props
        reduxActions.onClickTitle(e)

    }


    render() {
        console.log(this.props)
        const { lists} = this.props
        return <ReduxStudyLists lists={lists} onClickTitle={this.onClickTitle} />
    }

}

export default connect(
    ({reduxStudyLists}) => ({
        lists : reduxStudyLists.lists
    }),
    dispatch => ({
        reduxActions : bindActionCreators(reduxStudyListsActions,dispatch)
    })
)(ReduxStudyListsContainer)
