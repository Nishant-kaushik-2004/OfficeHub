import React, { useState, useEffect } from 'react';
import NavigationBar from './components/Navbar';
import  { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AuthModal from './components/AuthModal';
import EmployeeDashboard from './components/EmployeeDashboard';
import { Outlet } from 'react-router-dom';

function App() {
  const [show, setShow] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // To store the authenticated user's details

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // const navbar = document.querySelector('.animated-navbar');
    setTimeout(() => {
      // navbar.classList.add('show');
      navbar?.classList.add('show');
    }, 100); // Delay to ensure smooth transition
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
    setShow(false); // Close modal on successful login/signup
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <>
      {/* Navbar with logout functionality if logged in */}
      <NavigationBar handleShow={handleShow} isAuthenticated={isAuthenticated} handleLogout={handleLogout} />

      {/* Conditional Rendering: Show dashboard if authenticated, otherwise show landing page */}
      {isAuthenticated ? (
        <EmployeeDashboard user={user} />
      ) : (
        <>
          <HeroSection handleShow={handleShow} />
          <AuthModal show={show} handleClose={handleClose} handleLogin={handleLogin} />
          {show && <div className="backdrop-blur"></div>}
        </>
      )}
      <NavigationBar handleShow={handleShow} />
      <HeroSection handleShow={handleShow} />
      <AuthModal show={show} handleClose={handleClose} />
      {show && <div className="backdrop-blur"></div>}

    </>
  );
}

export default App;
