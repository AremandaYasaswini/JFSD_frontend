import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/Form.css'; // Adjust the path if needed
import loginImage from '../Images/login_1.jpeg'; // Replace with your image path

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Add your login logic here (e.g., API call)
    navigate('/products'); // Redirect to products page
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Redirect to the register page
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="form-section">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}> {/* Call handleSubmit on form submit */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="submit-btn">Login</button>
        </form>
        <p className="register-link">
          No account? <span onClick={handleRegisterClick} className="register-link-text">Register here</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
