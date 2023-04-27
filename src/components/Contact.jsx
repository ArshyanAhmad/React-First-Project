import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, Outlet } from 'react-router-dom';


export default function Contact() {
    return (
        <div className='contact'>
            <div className="container">

                <div className="contact-container">

                    <div className="contact-detail">

                        <div className="contact-detail-text">
                            <h2>Let's connect</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, reiciendis? Assumenda, voluptate ab! Quibusdam, ex. Molestiae ullam ratione porro ipsam!
                            </p>
                        </div>

                        <div className="contact-detail-info">
                            <li className="contact-link">
                                <MailOutlineIcon />
                                <p>info@gmail.com</p>
                            </li>
                            <li className="contact-link">
                                <PhoneIcon />
                                <p>+91 9012903409</p>
                            </li>
                            <li className="contact-link">
                                <LocationOnIcon />
                                <p>1234 Street Ln Viginia Beach, VA 12345</p>
                            </li>
                        </div>

                        <div className="contact-buttons">
                            <Link to="/">
                                <button className="btn primary">About Me</button>
                            </Link>
                            <Outlet />
                            <button className="btn secondary">Know More</button>
                        </div>

                    </div>

                    <div className="contact-form">
                        <h2>Send us a message</h2>

                        <form className="form">
                            <p>
                                <label htmlFor="name">First & Last Name</label>
                                <input type="name" className="input-field" />
                            </p>

                            <div className="flex-field">
                                <p>
                                    <label htmlFor="number">Phone number</label>
                                    <input type="number" autoComplete='off' required className="input-field" />
                                </p>
                                <p>
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" autoComplete='off' required className="input-field" />
                                </p>
                            </div>
                            <p>
                                <label htmlFor="text">Company name(optional)</label>
                                <input type="text" autoComplete='off' className="input-field" />
                            </p>
                            <p>
                                <label htmlFor="text">Message</label>
                                <textarea id="text" cols="30" rows="10" placeholder='Your message here...' className='text-field'></textarea>
                            </p>
                            <p>
                                <h5 className='required'>Fields required</h5>
                                <button className="btn primary">Contact us now!</button>
                            </p>

                        </form>
                    </div>


                </div>

            </div>
        </div>
    )
}
