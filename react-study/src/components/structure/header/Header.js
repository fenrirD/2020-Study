import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {CssBaseline, AppBar, Toolbar, Typography, IconButton, Button }  from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
import LoginDialogContainer from "../../../containers/LoginDialogContainer";
import {NavLink} from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appbar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

export default function Header({userId}) {

    const classes = useStyle()

    console.log(userId)
    return (
        <div>
            <CssBaseline />
            <AppBar position='fixed' className={classes.appbar} >
                <Toolbar >
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    {
                        userId ?
                            <Button color="inherit" > {userId}님 환영합니다.</Button>
                            :
                            <NavLink to={'/login'}  style={{ textDecoration: 'none'}}>
                                {/*<Button color="inherit" onClick={openDialog} >Login</Button>*/}
                                <Button color="inherit" >Login</Button>
                            </NavLink>
                    }


                </Toolbar>
            </AppBar>
        </div>
    )
}
