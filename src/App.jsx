// App.jsx
import React, { useState } from 'react';
import './main.scss';
import './signIn.scss';
import NavBar from './Components/NavBar';
import SignIn from './Components/SignIn';

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignInClick = () => {
    setIsSignInOpen(true);
  }

  const handleSignInClose = () => {
    setIsSignInOpen(false);
  }

  return (
    <>
      <NavBar onSignInClick={handleSignInClick} />
      {isSignInOpen && <SignIn onClose={handleSignInClose} />}
    </>
  )
}

export default App

