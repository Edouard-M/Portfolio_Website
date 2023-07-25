import React from 'react'

function About() {
  return (
    <div>
        <div className='about-main'>
            <div className='about-column-1'>
                <img src={require("../../assets/me/me_laptop.png")} className="about-photo" alt='Edouard'></img>
            </div>
            <div className='about-column-2'>
                <h2 className='about-h2'>About<span className='point'>.</span></h2>
                <span className='about-subtitle'>Fullstack Junior Developer / young graduate</span> 
                <span className='about-text'>Passionate about programming and algorithm. I aim to become a full-stack developer. During my different internships and must of all my personal practices, I acquired differents knowledge about software engineering</span>
                <div className='about-sublist'>
                    <div className='about-subcolumn'>
                        <li style={{"white-space": "nowrap"}}> <span className='about-bold'>Degree:</span> Master (2018 - 2023)</li>
                        <li style={{"white-space": "nowrap"}}> <span className='about-bold'>City:</span> Paris, France</li>
                        <li style={{"white-space": "nowrap"}}> <span className='about-bold'>Email:</span> edouard.mignien@gmail.com</li>
                    </div>
                    <div className='about-subcolumn'>
                        <li style={{"white-space": "nowrap"}}> <span className='about-bold'>Diploma:</span> Software Engineer</li>
                        <li style={{"white-space": "nowrap"}}> <span className='about-bold'>School:</span> ECE Paris - Engineering School</li>
                        <li style={{"white-space": "nowrap"}}> <span className='about-bold'>Phone:</span> (+33) 6 73 60 98 81</li>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
