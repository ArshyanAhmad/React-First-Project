import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header className="header ">
                <div className="container">

                    <a href="/">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7L0tIL4zOTkHRPAgO4EI5gGbps3tkaj1iWHBTTw2EBw&usqp=CAU&ec=48665699" width='130' height='auto' alt="logo" className="logo" />
                    </a>

                    <nav className="navbar">

                        <ul className="navbar-list">

                            <li>
                                <Link to="/" className="nav-item">Home</Link>
                            </li>
                            <li>
                                <Link to="about" className="nav-item">About</Link>
                            </li>
                            <li>
                                <Link to="services" className="nav-item">Services</Link>
                            </li>
                            <li>
                                <Link to="contact" className="nav-item">Contact</Link>
                            </li>

                        </ul>

                    </nav>

                </div>
                <Outlet />
            </header>
        </>
    )
}
