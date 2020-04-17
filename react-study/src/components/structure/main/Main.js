import React, {Component} from "react"
import {withStyles} from '@material-ui/core'
import {Route, Switch, Redirect} from "react-router-dom"
import routes from 'routes/routes'
import {Posts,Login} from "../../../pages";
import HeaderContainer from "../../../containers/HeaderContainer";
import Header from 'components/structure/header/Header'
import SideBar from "components/structure/left/SideBar"
import {c} from "react-syntax-highlighter/dist/cjs/languages/prism";


const styles = theme => ({

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
})

class  Main extends Component{

    renderRoute = () => {
        console.log('renderRoute~')
        return(
            // <Switch>

        <div>
            {routes.map( route => (
                    route.app ? null :
                        <Route exact={route.root} path={route.param ? route.param : route.path}
                               component={route.component} key={route.name}/>

            ))}
        </div>
            // </Switch>
    )
    }
    render() {
        const {classes,match} = this.props
        console.log('main render ')
        return (
                <div style={{display: 'flex'}}>
                    <HeaderContainer/>
                    <SideBar/>
                    <main className={classes.content}>
                            {console.log('render?')}
                            <div className={classes.toolbar}/>
                            {this.renderRoute()}

                    </main>



                </div>

        )
    }
}
export default withStyles(styles)(Main)
