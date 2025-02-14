import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Apptext from './Apptext.jsx';
import './Signup.css';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import { Link } from 'react-router';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSignup = (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword || !phone) {
      toast.error('Please fill in all fields.');
    return;
  }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match.');
      return;
    }

    // Check if email already exists in localStorage
    const existingEmail = localStorage.getItem('email');
    if (existingEmail && existingEmail === email) {
        toast.error('This email is already registered.');
      return;
    }

    // Store user data in localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('phone', phone);

    // Redirect to login page after successful signup
    navigate('/login');
  };

  return (
    <>
    <Navbar/>
    <div className="signup-container">
      <h2 className="form-title">Sign Up</h2>

      {/* Signup Form */}
      <form onSubmit={handleSignup} className="signup-form">
        {error && <p className="error">{error}</p>}  {/* Show error message if any */}

        <Apptext
          type="text"
          placeholder="First Name"
          icon={<i className="fa-solid fa-user"></i>}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Apptext
          type="text"
          placeholder="Last Name"
          icon={<i className="fa-solid fa-user"></i>}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Apptext
          type="email"
          placeholder="Enter Your Email"
          icon={<i className="fa-solid fa-envelope"></i>}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

          <Apptext
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            icon={<i className="fa-solid fa-phone"></i>}
            placeholder="Enter your phone number"
            required
          />

        <Apptext
          type="password"
          placeholder="Password"
          icon={<i className="fa-solid fa-lock"></i>}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Apptext
          type="password"
          placeholder="Confirm Password"
          icon={<i className="fa-solid fa-lock"></i>}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>

      <p className="login-text">
        Already have an account? <Link to="/login">Login now</Link>
      </p>

      <Toaster />
    </div>
    <Footer/>
    </>
  );
};

export default Signup;
