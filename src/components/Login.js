import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Form.css';
import loginImage from '../Images/login_1.jpeg';

const Login = ({ setRole }) => { 
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
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
        const response = await axios.post('http://localhost:8080/users/login', formData, { withCredentials: true });
        if (response.status === 200) {
            const role = response.data;
            const username = formData.email;

            console.log(`Setting role: ${role}`);
            localStorage.setItem('username', username);
            localStorage.setItem('role', role);

            setRole(role);
            alert('Login successful!');  // Display alert after successful login

            // Dispatch custom event to notify login status change
            window.dispatchEvent(new Event('loginChange'));

            if (role.toUpperCase() === 'ADMIN') {
                navigate('/admin');
            } else if (role.toUpperCase() === 'FARMER') {
                navigate('/farmer');
            } else if (role.toUpperCase() === 'BUYER') {
                navigate('/');
            } else {
                navigate('/');
            }
        }
    } catch (err) {
        setError(err.response?.data?.message || 'Invalid credentials. Please try again.');
    }
};

  
  return (
    <div className="login-container">
      <div className="image-section">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="form-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="submit-btn">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
        <p className="register-link">
          No account?{' '}
          <span onClick={() => navigate('/register')} className="register-link-text">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
