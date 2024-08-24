import  { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const AuthModal = ({ show, handleClose, handleLogin }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState('');
<<<<<<< HEAD
  const [role, setRole] = useState('Select Role');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const toggleAuthMode = () => setIsSignup(!isSignup);
=======
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
>>>>>>> b6cd8ecfad7642eaa4ec79d3cd66246c5e085223

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
<<<<<<< HEAD
        <Form onSubmit={onSubmit}>
=======
        <Form onSubmit={loginUser}>
>>>>>>> b6cd8ecfad7642eaa4ec79d3cd66246c5e085223
          {isSignup && (
            <>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
<<<<<<< HEAD
                <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
=======
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
>>>>>>> b6cd8ecfad7642eaa4ec79d3cd66246c5e085223
              </Form.Group>

              <Form.Group controlId="formBasicRole">
                <Form.Label>Role</Form.Label>
<<<<<<< HEAD
                <Form.Control as="select" value={role} onChange={e => setRole(e.target.value)}>
=======
                <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)} required>
>>>>>>> b6cd8ecfad7642eaa4ec79d3cd66246c5e085223
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
<<<<<<< HEAD
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
=======
            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
>>>>>>> b6cd8ecfad7642eaa4ec79d3cd66246c5e085223
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
<<<<<<< HEAD
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
          </Form.Group>

=======
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
>>>>>>> b6cd8ecfad7642eaa4ec79d3cd66246c5e085223
          <Button variant="primary" type="submit" className="w-100 mt-3">
            {isSignup ? 'Sign Up' : 'Login'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;