import React from 'react'

function About() {
  return (
    <div className='about-container'>
        <h2 className='about-h2'> ABOUT </h2>
        <div className='about-main'>
          <div className='about-main-column_1'>
            <img src={require("../assets/edouard_square.png")} className="about-photo" alt='Edouard'></img>
          </div>
          <div className='about-main-column_2'>
            <div className='about-text'>
              Passionate about programming and algorithm. I aim to become a full-stack developer.
              Thanks to my studies, my different internships and must of all my personal practices, I acquired differents knowledge about software engineering.
              Currently i have préférence for the backend developpment
            </div>
            <div className='about-text-2'>
              <div className='about-text-2-column-1'>
                <ul>
                  <li> <span style={{'fontWeight': '700'}}>Birthday:</span>  12 Janvier 2000</li>
                  <li> <span style={{'fontWeight': '700'}}>Age:</span> 23</li>
                  <li> <span style={{'fontWeight': '700'}}>City:</span> Paris, France</li>
                  <li> <span style={{'fontWeight': '700'}}>Email:</span> edouard.mignien@gmail.com</li>
                </ul>
              </div>
              <div className='about-text-2-column-2'>
                <ul>
                  <li> <span style={{'fontWeight': '700'}}>Degree:</span> Master (2018 - 2023)</li>
                  <li> <span style={{'fontWeight': '700'}}>Diploma:</span> Software Engineer (2023)</li>
                  <li> <span style={{'fontWeight': '700'}}>School:</span> ECE Paris - Engineering School</li>
                  <li> <span style={{'fontWeight': '700'}}>Phone:</span> (+33) 6 73 60 98 81</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
