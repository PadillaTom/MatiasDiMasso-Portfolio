import React, {useContext} from 'react'
import {Link} from "react-router-dom"

import {HiOutlineMenuAlt4} from "react-icons/hi"
import {FaTimes} from "react-icons/fa";
import Logo from "../../Assets/Logo_Mati_Portfolio.svg"

import {MenusContext} from "../../Context/MenusContext";


const Navbar = () => {
    const {isSidebarOpen, openSidebar, closeSidebar} = useContext(MenusContext)
    
    return (
        <nav className="navigation">
            {/* Mobile */}
            <div className="mobileMenu-container">
                <div className="mobileMenu-center">
                    <Link to="/" className="logo-container">
                        <img src={Logo} alt="Matias Di Masso Logo" />
                    </Link>
                    {
                        isSidebarOpen 
                        ? 
                        <FaTimes onClick={closeSidebar} className="sidebar-close"></FaTimes>
                        :
                        <HiOutlineMenuAlt4 onClick={openSidebar} className="sidebar-open"></HiOutlineMenuAlt4>
                    }
                </div>
            </div>
            {/* Desktop */}
        </nav>
    )
}

export default Navbar
