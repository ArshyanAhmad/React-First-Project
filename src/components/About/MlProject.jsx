import React from 'react'
import portfolio3 from '../image/portfolio3.jpg'
import work5 from '../image/work5.jpg'
import portfolio6 from '../image/portfolio6.jpg'


export default function MlProject() {
    return (
        <div className='projects'>

            <div className="project">

                <div className="project-item">
                    <img src={portfolio3} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={work5} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={portfolio6} alt="web project" className="img-cover" />
                </div>

            </div>

        </div>
    )
}
