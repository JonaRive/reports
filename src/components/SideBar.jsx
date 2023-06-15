import React from "react"
import { NavLink  } from 'react-router-dom';

function SideBar (){

    return(
        <div className="sidebar">
        <ul className="ul-sidebar mt-3">
            <li className="li-sidebar  mt-2" >
                <NavLink to='/Linear' className="a-sidebar text-dark rounded " exact activeClassName="active"> Line </NavLink>
            </li>
            <li className="li-sidebar mt-2 "> 
              <NavLink to='/pie' className="a-sidebar text-dark rounded" exact activeClassName="active"> Pie </NavLink>
            </li>

        </ul>
        </div>
    )
}

export default SideBar