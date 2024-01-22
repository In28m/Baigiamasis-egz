import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.scss';
import './signIn.scss';
import NavBar from './Components/NavBar';
import SignIn from './Components/SignIn';
import GetStart from './Components/GetStart';

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignInClick = () => {
    setIsSignInOpen(true);
  }

  const handleSignInClose = () => {
    setIsSignInOpen(false);
  }

  return (
    <Router>
      <>
        <NavBar onSignInClick={handleSignInClick} />
        {isSignInOpen && <SignIn onClose={handleSignInClose} />}

        <Routes>
          <Route path="/get-start" element={<GetStart />} />
        </Routes>
      </>
    </Router>
  )
}

export default App;



