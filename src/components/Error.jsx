import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from './image/error.jpg'

export default function Error() {
    const navigate = useNavigate()

    return (
        <div className='error'>
            <div className="container">

                <div className="error-container">
                    <div className="img-holder">
                        <img src={img} alt="error_image" height='auto' className='img-cover' />
                    </div>

                    <div className='notFound'>
                        <h2>Page Not Found</h2>
                        <button className="btn primary" onClick={() => navigate(-1)}>Go Back</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
