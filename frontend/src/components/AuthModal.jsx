import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AuthModal = ({ show, handleClose, handleLogin }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Select Role');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const toggleAuthMode = () => setIsSignup(!isSignup);

  const onSubmit = (e) => {
    e.preventDefault();
    // Dummy user data creation for now
    const userData = {
      name: isSignup ? name : 'Existing User',
      role: isSignup ? role : 'Employee',
      email: email,
    };
    handleLogin(userData); // Pass the user data to the parent component
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isSignup ? 'Sign Up' : 'Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          {isSignup && (
            <>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicRole">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" value={role} onChange={e => setRole(e.target.value)}>
                  <option disabled>Select Role</option>
                  <option>Manager</option>
                  <option>Boss</option>
                  <option>Lead</option>
                  <option>Frontend Dev</option>
                  <option>Backend Dev</option>
                  <option>DevOps Eng</option>
                  <option>UI/UX Dev</option>
                  <option>SDE</option>
                  <option>Intern</option>
                </Form.Control>
              </Form.Group>
            </>
          )}

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            {isSignup ? 'Sign Up' : 'Login'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
