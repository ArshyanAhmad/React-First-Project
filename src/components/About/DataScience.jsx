import React from 'react'
import portfolio1 from '../image/portfolio1.jpg'
import work4 from '../image/work5.jpg'
import work1 from '../image/work1.jpg'


export default function MlProject() {
    return (
        <div className='projects'>

            <div className="project">

                <div className="project-item">
                    <img src={portfolio1} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={work4} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={work1} alt="web project" className="img-cover" />
                </div>

            </div>

        </div>
    )
}
