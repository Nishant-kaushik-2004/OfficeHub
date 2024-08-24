import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const HeroSection = ({ handleShow }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const userData = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : '';
    setUser(userData?._id);
    setAdmin(userData?.isAdmin);
  })
  const direct = () => {
    navigate('/admin/dashboard');
  }
  return (
    <header className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="display-4">Manage Your Office Efficiently</h1>
        <p className="lead">Our office management system streamlines workflows and enhances productivity.</p>
        {user ?
          <>
            {admin ? <Button variant="success" size="lg" onClick={direct}>Dashboard</Button> : <Button variant="success" size="lg" onClick={handleShow}>Dashboard</Button>}
          </> :
          <Button variant="success" size="lg" onClick={handleShow}>Get Started</Button>
        }
      </div>
    </header >
  );
};

export default HeroSection;