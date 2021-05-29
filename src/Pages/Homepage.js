import React from 'react'

import BgImage from "../Assets/BgImage.jpg";

const Homepage = () => {
    return (
        <section className="section homepage-sect">
            <div className="homepage-img-container">
                <img src={BgImage} alt="Matias Di Masso Portfolio" className="homepage-img"/>
            </div>
            <div className="homepage-text-container">
                <h2>
                    Hola! I’m Mati,
                    <br />
                    a digital designer 
                    <br />
                    specialising in 
                    <br />
                    UX/UI.
                </h2>
            </div>
        </section>
    )
}

export default Homepage
