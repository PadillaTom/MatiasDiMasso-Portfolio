import React from 'react'

import ProfilePicture from "../Assets/Portfolio headshot edited.jpg"

const About = () => {
    return (
        <section className="section about-sect">
            <div className="about-img-container">
                <img src={ProfilePicture} alt="Matias Di Maso Profile" />
            </div>

            <div className="about-text-container">
                <p>
                Born and raised in Buenos Aires,
                shaped and crafted in London.
                Currently working at Strike UX
                as a digital designer and social
                media manager.
                </p>
            </div>
            <div className="page-title">
                About
            </div>
        </section>
    )
}

export default About
