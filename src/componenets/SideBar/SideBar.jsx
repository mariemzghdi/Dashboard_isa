import React from 'react'
import './SideBar.css'
import HomeIcon from '@material-ui/icons/Home';

import HelpOutlineIcon from '@material-ui/icons/HelpOutline';



// function refreshPage() {
//      window.location.reload(false);
//   }
export default function SideBar() {
    return (
        <div className="SideBar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu ">
                    <ul className="sidebarList">
                        <li className="siderListItem " >
                        <HomeIcon className="sidebarIcone" />
                        </li>
                        <br>
                        </br>
                        <li className="siderListItem">
                             <HelpOutlineIcon/>
                             <span>Help</span>
                        </li>
                    </ul>
                </div>
               
                
            </div>
        </div>
    )
}

