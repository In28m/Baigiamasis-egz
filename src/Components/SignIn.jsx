import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const SignIn = ({ onClose }) => {
  return (
    <div className="sign-in-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <form className="container">
          <MdOutlineKeyboardArrowLeft className="back-btn" onClick={onClose} />
          <h2>Welcome Back</h2>
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Password" />
          <h3>Sign in</h3>
          <button><HiOutlineArrowRight /></button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
