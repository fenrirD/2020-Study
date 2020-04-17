import React, {Component} from "react"
import headerRoutes  from "../routes";
import Header from './layouts/header'
import {Redirect, Route, Switch} from "react-router";
import '../stylesheets/main.scss'
import PageContainer from "../containers/pageContainer";

class Main extends Component{



    //TODO 힘내보자 화이팅
    renderHeaderRoutes = () => {
        return (
            <Switch>
                {
                    headerRoutes.map(route => (
                    <Route path={route.path} key={route.name} component={PageContainer} />
                ))
                }
                {console.log('why?')}
                <Redirect to='/DeckGL/lineLayer' />

            </Switch>
        )
    }


    render() {
        console.log(headerRoutes)
        return (
            <div>
                <Header routes={headerRoutes}/>
                {this.renderHeaderRoutes()}
            </div>

        )
    }
}


export default Main

