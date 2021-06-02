import React from 'react'
import {Link} from "react-router-dom"

import BgImg from "../Assets/404Img.jpg"

const Error = () => {
    return (
        <div className="section error-sect">               
            <img src={BgImg} alt="404" className="error-bgImg"/>
            <div className="error-text top-text">
                <h2>404 Error</h2>
                <p>Got lost in the woods?</p>
            </div>
            <div className="error-text bot-text">
                <p>Here's the way back</p>
                <div className="error-cta-container">
                    <Link to="/">Home</Link>
                    <div className="errorCta-underline"></div>
                </div>
            </div>
        </div>
    )
}

export default Error
