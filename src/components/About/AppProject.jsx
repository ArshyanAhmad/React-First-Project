import React from 'react'
import portfolio2 from '../image/portfolio2.jpg'
import work2 from '../image/work2.jpg'
import portfolio4 from '../image/portfolio4.jpg'


export default function AppProject() {
    return (
        <div className='projects'>

            <div className="project">

                <div className="project-item">
                    <img src={portfolio2} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={portfolio4} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={work2} alt="web project" className="img-cover" />
                </div>

            </div>

        </div>
    )
}
