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
