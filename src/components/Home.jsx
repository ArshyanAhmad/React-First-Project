import React from 'react'

export default function Home() {
    return (
        <>
            <main className="main">
                <div className="container">

                    <div className="main-container">

                        <div className="main-text">
                            <h1 className='main-heading'> <span> Unleash Your Creativity </span> with Online Art Classes</h1>
                            <p className='main-para'>This heading is designed to catch the reader's attention by making a bold statement ("Unleash Your Creativity") and offering a specific service ("Online Art Classes"). </p>
                            <p className='main-sm-para'>It's also designed to appeal to a specific audience the website can help them achieve their goals.</p>
                            <button className="btn primary">Get Started</button>
                        </div>

                        <div className="img-holder" width='700' height='auto'>
                            <img src="https://img.freepik.com/premium-vector/blog-authors-writing-articles_179970-1523.jpg" alt="" className="img-cover" width='700' height='auto' />
                        </div>

                    </div>

                </div>
            </main>
        </>
    )
}
