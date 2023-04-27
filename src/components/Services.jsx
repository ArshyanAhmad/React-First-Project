import React from 'react'
import services1 from './image/services1.png'
import services2 from './image/services2.png'
import services3 from './image/services3.png'

export default function Services() {
    return (
        <div className='services' >
            <div className="container">

                <div className="services-container">
                    <div className="services-text">
                        <h4>Features</h4>
                        <h2>Our Features & Services.</h2>
                    </div>

                    <div className="services-cards">

                        <div className="services-card">
                            <img src={services1} alt="services1" />
                            <h4>Communication</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, asperiores eius? Cumque!</p>
                            <button className="btn primary">More</button>
                        </div>

                        <div className="services-card">
                            <img src={services2} alt="services2" />
                            <h4>Inspired Design</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate pariatur.</p>
                            <button className="btn primary">More</button>
                        </div>

                        <div className="services-card">
                            <img src={services3} alt="services3" />
                            <h4>Happy Customers</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo iure quos.</p>
                            <button className="btn primary">More</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
