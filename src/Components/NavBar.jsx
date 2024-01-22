import React from 'react';
import { Link } from 'react-router-dom';
import { SiYourtraveldottv } from 'react-icons/si';
import { FaArrowRight } from 'react-icons/fa6';

const NavBar = ({ onSignInClick }) => {
  return (
    <div className="navBar">
      <h1 className="travelLogo">
        <SiYourtraveldottv /> Travel
      </h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/get-start">GET START</Link>
      </nav>
      <div className="btn">
        <button onClick={onSignInClick}>Sign in</button>
        <Link className='get' to="/get-start">
          Get start <FaArrowRight className="react-icons" />
        </Link>
      </div>
    </div>
  )
}

export default NavBar

