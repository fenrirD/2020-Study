import React, {Component} from 'react'

import Main from 'components/structure/main/Main'
import {Home, About, Posts, Login} from 'pages'
import {Route, Switch} from "react-router-dom";
import LoginContainer from 'containers/LoginContainer'



export default class App extends Component {
    componentDidMount() {
        console.log('component')
        console.log(this.props)

    }


    render() {
        return (
                <div>
                    <Switch>
                        <Route exact path={'/login'} component={LoginContainer}/>
                        <Route path={'/'} component={Main}/>
                    </Switch>
                </div>
        )
    }
}

