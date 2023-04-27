import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function About() {


    return (
        
        <div className='about'>
            <div className="container">

                <div className="about-container">
                    <div className="img-holder" width='500' height='auto'>
                        <img src="https://img.freepik.com/free-vector/appointment-booking-smartphone_23-2148559902.jpg" alt="" className="about-image img-cover" width='500' height='auto' />
                    </div>

                    <div className="about-text">
                        <h1 className='about-heading'><span> Discover Your Inner Adventurer </span> with Trekking Tours</h1>
                        <p className='about-para'>This heading is intended to grab the reader's attention and give them a sense of what the website is about. It includes a catchy phrase "Discover Your Inner Adventurer".</p>
                        <p className="about-sm-para">
                            the name of the service  and a call to  their goals "Discover Your Inner Adventurer with Trekking Tours".
                        </p>
                        <button className="btn secondary">About Me</button>
                    </div>

                </div>

                <div className="about-wrapper">
                    <div className="about-buttons">

                        <NavLink to='webProject'>
                            <button className='btn primary'>Web Project</button>
                        </NavLink>

                        <NavLink to='appProject'>
                            <button className='btn secondary'>App Project</button>
                        </NavLink>

                        <NavLink to='mlProject'>
                            <button className='btn primary'>ML Project</button>
                        </NavLink>

                        <NavLink to='dataScience'>
                            <button className='btn secondary'>Data Science</button>
                        </NavLink>

                        <Outlet />

                    </div>
                </div>
            </div>

        </div>
    )
}
