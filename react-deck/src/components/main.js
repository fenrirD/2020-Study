import React, {Component} from "react"
import headerRoutes  from "../routes";
import Header from './layouts/header'
import {Redirect, Route, Switch} from "react-router";
import '../stylesheets/main.scss'
import PageContainer from "../containers/pageContainer";
import Camera from "./resium/camera";

class Main extends Component{



    //TODO 힘내보자 화이팅
    renderHeaderRoutes = () => {
        console.log(this.props)
        return (
            <Switch>


                {
                    headerRoutes.map(route => (
                    <Route path={route.path} key={route.name} component={PageContainer} />
                ))
                }
                {console.log('redirect?')}
                <Redirect to='/DeckGL/lineLayer'/>

            </Switch>
        )
    }


    render() {

        return (
            <div>
                {/*<Camera></Camera>*/}
                <Header routes={headerRoutes}/>
                {this.renderHeaderRoutes()}
            </div>

        )
    }
}


export default Main

