import React from 'react'

import {HiOutlineMenuAlt4} from "react-icons/hi"

import Logo from "../../Assets/Logo_Mati_Portfolio.svg"

const Navbar = () => {
    return (
        <menu>
            {/* Mobile */}
            <div className="mobileMenu-container">
                <div className="logo-container">
                    <img src={Logo} alt="Matias Di Masso Logo" />
                </div>
                <HiOutlineMenuAlt4></HiOutlineMenuAlt4>
            </div>
            {/* Desktop */}
        </menu>
    )
}

export default Navbar
