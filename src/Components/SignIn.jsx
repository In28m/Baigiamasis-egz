import React, { useState } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';

const SignIn = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className="sign-in-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <form className="container" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>
          <input type="text" placeholder="Your Email" />
          <input type="text" placeholder="Password" />
          <h3>Sign in</h3>
          <button type="submit"><HiOutlineArrowRight /></button>
        </form>
      </div>
    </div>
  )
}

export default SignIn

