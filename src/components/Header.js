import React from 'react';
import image1 from "../assets/image1.jpg";

const Header = () => {
  return (
    <div className="container">
      <div>
        <p className="heading">
          A <span>Resume</span> that stands out!
        </p>
        <p className="heading">
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className='right'>
        <img src={image1} alt="Resume" />
      </div>
    </div>

  )
}

export default Header
