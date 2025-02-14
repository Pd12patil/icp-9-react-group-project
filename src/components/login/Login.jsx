import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Apptext from './Apptext.jsx';
import Appicon from './Appicon.jsx';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer.jsx';
import { Link } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = (event) => {
    event.preventDefault();

    // Validate fields
    if (!email || !password) {
      toast.error('Please fill in both fields.');
      return;
    }

    // Check if credentials match stored data
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail === email && storedPassword === password) {
      // Handle 'Remember Me' feature
      if (rememberMe) {
        localStorage.setItem('email', email);
      } else {
        localStorage.removeItem('email');
      }

      // Simulate successful login
      localStorage.setItem('loggedIn', 'true');
      navigate('/staplesc');
    } else {
      toast.error('Invalid email or password.');
    }
  };

  // Handle changes for the "Remember Me" checkbox
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  // Pre-fill email if stored in localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

  return (
    <>
    <Navbar/>
    <div className="login-container">
      <h2 className="form-title">Log In</h2>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="login-form">
        {error && <p className="error">{error}</p>}  {/* Show error if any */}

        <Apptext
          type="email"
          placeholder="Enter Your email"
          icon={<i className="fa-solid fa-envelope"></i>}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Apptext
          type="password"
          placeholder="Password"
          icon={<i className="fa-solid fa-lock"></i>}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="forgot-pass-link">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <span className='remember'>Remember Me</span>
          </span>
          <a href="#or" className="forgot-pass-link">Forgot Password?</a>
        </div>

        <button type="submit" className="login-button">Log In</button>
      </form>

      <p className="separator"><span>or</span></p>

      <Appicon />
      <p className="signup-text">
        Don't have an account? <Link to="/signup">Signup now</Link>
      </p>
      <Toaster />
    </div>
    <Footer/>
    </>
  );
};

export default Login;
