import React from 'react'
import portfolio1 from '../image/portfolio1.jpg'
import work1 from '../image/work1.jpg'
import portfolio5 from '../image/portfolio5.png'


export default function WebPorject() {
  return (
    <div className='projects'>

      <div className="project">

        <div className="project-item">
          <img src={portfolio1} alt="web project" className="img-cover" />
        </div>

        <div className="project-item">
          <img src={portfolio5} alt="web project" className="img-cover" />
        </div>

        <div className="project-item">
          <img src={work1} alt="web project" className="img-cover" />
        </div>

      </div>

    </div>
  )
}
