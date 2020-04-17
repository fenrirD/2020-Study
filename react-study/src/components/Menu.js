import React from "react"
import { NavLink } from 'react-router-dom'

const Menu = (prop) => {
    console.log(prop)
    return (
        <div>
            <ul>
                <li><NavLink to='/'> Home</NavLink></li>
                <li><NavLink to='/'> </NavLink></li>
                <li><NavLink to='/about/lsy'> About lsy</NavLink></li>
                <li><NavLink to='/posts'> Posts</NavLink></li>
            </ul>
            <hr />
        </div>
    )
}

export default Menu
