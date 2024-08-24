import  { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const AuthModal = ({ show, handleClose }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);

  const toggleAuthMode = () => {
    setIsSignup(!isSignup);
  };

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      if (isSignup) {
        // Create new user (Sign Up)
        const response = await axios.post('http://localhost:5000/api/users/signup', { username: name, email, password, role });
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log('User signed up successfully:', response);
      } else {
        // Log in existing user
        const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
        localStorage.setItem("users", JSON.stringify(response.data));
        console.log('User logged in successfully:', response.data);
      }

      handleClose(); // Close the modal on success
    } catch (error) {
      console.error('Error during authentication:', error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data : "An error occurred");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isSignup ? 'Sign Up' : 'Login'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={loginUser}>
          {isSignup && (
            <>
              {/* Name Field */}
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
              </Form.Group>

              {/* Role Dropdown */}
              <Form.Group controlId="formBasicRole">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)} required>
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

          {/* Email Field */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
          </Form.Group>

          {/* Password Field */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
          </Form.Group>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          {/* Account Status Toggle Text */}
          <div className="text-center mt-3">
            {isSignup ? (
              <>
                <p>
                  Already have an account?{' '}
                  <Button variant="link" onClick={toggleAuthMode}>
                    Login here
                  </Button>
                </p>
              </>
            ) : (
              <>
                <p>
                  Don't have an account?{' '}
                  <Button variant="link" onClick={toggleAuthMode}>
                    Sign up here
                  </Button>
                </p>
              </>
            )}
          </div>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="w-100 mt-3">
            {isSignup ? 'Sign Up' : 'Login'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;