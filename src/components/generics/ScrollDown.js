import React from 'react'

function ScrollDown() {
  return (
    <a href="#about">
      <div className="mouse-scroll">
          <div className="mouse">
              <div className="mouse-in"></div>
          </div>
          <div>
              <span className="down-arrow-1"></span>
              <span className="down-arrow-2"></span>
              <span className="down-arrow-3"></span>
          </div>
      </div>
    </a>
  )
}

export default ScrollDown
