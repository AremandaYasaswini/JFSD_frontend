import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Form.css';
import signupImage from '../Images/register_1.jpeg';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'BUYER'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/signup', formData);
      if (response.status === 200 || response.status === 201) {
        alert('Signup successful!');
        navigate('/login');
      }
    } catch (err) {
      // Do nothing when an error occurs
      // You can optionally log the error to the console for debugging
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="signup-container">
      <div className="image-section">
        <img src={signupImage} alt="Signup" />
      </div>
      <div className="form-section">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="BUYER">Buyer</option>
              <option value="FARMER">Farmer</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
        <div className="login-link">
          <p>
            Already a member?{' '}
            <span className="login-link-text" onClick={() => navigate('/login')}>
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;