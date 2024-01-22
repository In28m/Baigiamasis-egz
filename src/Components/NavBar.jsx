import React from 'react';
import { SiYourtraveldottv } from 'react-icons/si';
import { FaArrowRight } from 'react-icons/fa6';

const NavBar = ({ onSignInClick }) => {
  return (
    <div className="navBar">
      <h1 className="travelLogo">
        <SiYourtraveldottv /> Travel
      </h1>
      <nav>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </nav>
      <div className="btn">
        <button onClick={onSignInClick}>Sign in</button>
        <button>
          Get start <FaArrowRight className="react-icons" />
        </button>
      </div>
    </div>
  )
}

export default NavBar

