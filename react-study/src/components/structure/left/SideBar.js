import React from "react"
import {makeStyles, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core"
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import {NavLink} from "react-router-dom";
import routes from 'routes/routes'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
}));


export default function SideBar() {
    const classes = useStyles();

    const renderNavLinks = () => {
        return (
            <List>
            {
                routes.map( route => (
                    route.app ? null :
                    <NavLink to={route.path} key={route.name} style={{ textDecoration: 'none'}}>
                        <ListItem button key={route.name}>
                            <ListItemIcon><route.icon/></ListItemIcon>
                            <ListItemText primary={route.name}  />
                        </ListItem>
                    </NavLink>
                ))
            }
            </List>
        )
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            {renderNavLinks()}
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}


