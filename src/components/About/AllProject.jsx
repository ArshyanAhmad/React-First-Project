import React from 'react'
import work1 from '../image/work1.jpg'
import work2 from '../image/work2.jpg'
import work3 from '../image/work3.jpg'
import portfolio1 from '../image/portfolio1.jpg'
import portfolio2 from '../image/portfolio2.jpg'
import portfolio3 from '../image/portfolio3.jpg'


export default function WebPorject() {
    return (
        <div className='projects'>

            <div className="project">

                <div className="project-item">
                    <img src={work1} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={portfolio1} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={work2} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={portfolio2} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={work3} alt="web project" className="img-cover" />
                </div>

                <div className="project-item">
                    <img src={portfolio3} alt="web project" className="img-cover" />
                </div>

            </div>

        </div>
    )
}
