import React from "react"
import {NavLink} from "react-router-dom";

const Left = ({routes}) =>{

    console.log(routes)

    return (
        <div className='toc open'>
            <div>
                {routes.map((route,idx) =>
                    <NavLink className='list-header expanded' activeClassName="active" key={`group-header${idx}`} to={route.path}>
                        {route.name}
                    </NavLink>
                )}

            </div>
        </div>
    )
}

export default Left
