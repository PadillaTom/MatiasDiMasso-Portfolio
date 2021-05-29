import React, {useContext} from 'react'
import {Link} from "react-router-dom"

import {MenusContext} from "../../Context/MenusContext"
import {Links} from "../../Utils/Links"

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useContext(MenusContext);
    
    return (
        <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
            {/* Links */}
            <ul className="side-links">
                {Links.map((singleLink)=>{
                    const {id, url, label} = singleLink;
                    return (
                        <li key={id}>
                            <Link to={`${url}`} onClick={closeSidebar}>
                                {label}
                            </Link>
                        </li>
                ) 
                })}
                <li>
                    <a href="mailto:matiasdimasso@outlook.com" target="_blank" rel="noreferrer">
                        Email
                    </a>
                </li>
            </ul>

        </aside>
    )
}

export default Sidebar
