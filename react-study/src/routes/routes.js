import {Dashboard, Person} from "@material-ui/icons"
import LibraryBooks from "@material-ui/icons/LibraryBooks"
import BubbleChart from "@material-ui/icons/BubbleChart"
import LocationOn from "@material-ui/icons/LocationOn"
import Notifications from "@material-ui/icons/Notifications"
import Unarchive from "@material-ui/icons/Unarchive"
import Language from "@material-ui/icons/Language"
import {NavLink} from "react-router-dom"
import Main from 'components/structure/main/Main'
import React from "react"
import {Home, About, Posts, Login} from 'pages'
import AboutContainer from '../pages/AboutContainer'
import PostContainer from "../pages/PostContainer";
import ReduxStudyListsContainer from '../containers/ReduxStudyListsContainer'

const route = [
    {
        path: '/',
        name: 'Home',
        icon: Dashboard,
        component: Home,
        root: true
    },
    {
        path: '/about/lsy',
        param: '/about/:name',
        name: 'About lsy',
        icon: LibraryBooks,
        component: AboutContainer,
        root: false
    },
    {
        path: '/redux',
        name: 'redux',
        icon: LocationOn,
        component: () => <ReduxStudyListsContainer  />,
        root: true
    },
    {
        path: '/about',
        name: 'About',
        icon: Person,
        component: About,
        root: true
    },
    {
        path: '/posts',
        name: 'Posts',
        icon: BubbleChart,
        component: Posts,
        root: false
    },
    {
        path: '/posts/:id',
        name: 'Posts 1',
        icon: BubbleChart,
        component: PostContainer,
        root: false
    },

]

export default route
