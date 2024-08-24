<<<<<<< HEAD
import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

const NavigationBar = ({ handleShow, isAuthenticated, handleLogout }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="navbar sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand">OfficeOpsHub</a>
        <div className="d-flex">
          {isAuthenticated ? (
            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
          ) : (
            <Button className="btn btn-success" onClick={handleShow}>Login</Button>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
=======
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavigationBar = ({ handleShow }) => {
  const [user, setUser] = useState('');
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const userData = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : '';
    setUser(userData?._id);
    setAdmin(userData?.isAdmin);
  })
  const handlelogout = async () => {
    const response = await axios.post('http://localhost:5000/api/users/logout');
    localStorage.setItem("users", null);
    console.log(response);
  }
  return (

    <Navbar bg="primary" variant="dark" expand="lg" className="navbar sticky-top"   >
      <div className="container-fluid">
        <a className="navbar-brand">Office Manager</a>
        {user && <div className="d-flex" >
          <button className="btn btn-success" onClick={handlelogout} type="submit">Logout</button>
        </div>}
      </div>
    </Navbar>


  );
};

export default NavigationBar;
>>>>>>> b6cd8ecfad7642eaa4ec79d3cd66246c5e085223
