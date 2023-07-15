import React from 'react'

//<p className='home-full-stack'> Full-Stack </p>

function Home() {
  return (
    <div className='home-mid'>
        <div className='home-left'>
            <div className='home-content-left'>
                <h1 className='home-name'> Edouard Mignien</h1>
                <div className='home-me'>
                    I'm a 
                    <section className="home-animation">
                        <div className="first"><div>full-stack</div></div>
                        <div className="second"><div>back-end</div></div>
                    </section>
                    Software Engineer
                </div>
            </div>
        </div>
        <div className='home-right'>
            <div className='home-content-right'>
                <div className='home-right-circle_1'>
                    <div className='home-right-circle'><img src={require("../assets/Me_circle.png")} className="home-photo" alt='Edouard'></img></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
