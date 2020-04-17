import React from "react"
import {NavLink} from "react-router-dom";

const Header = ({routes}) => {


    return (

        <header>
            <div className='bg'/>
            <div className='links'>
                {Array.isArray(routes) && routes.map((route, idx) => (
                    <NavLink activeClassName='active' to={route.param? route.param: route.path} key={`key_${idx}`}>{route.name}</NavLink>
                ))}
                <a href='https://fenrird.github.io/'>
                    Github<i className="icon icon-github" />
                </a>
            </div>
        </header>
    )
}

export default Header
