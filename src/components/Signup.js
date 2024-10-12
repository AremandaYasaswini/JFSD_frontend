import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../css/Form.css'; // Adjust the path if needed
import signupImage from '../Images/register_1.jpeg'; // Replace with your image path

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Add your signup logic here (e.g., API call)
    navigate('/login'); // Redirect to login page after sign up
  };

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to login page when 'Login here' is clicked
  };

  return (
    <div className="signup-container">
      <div className="image-section">
        <img src={signupImage} alt="Signup" />
      </div>
      <div className="form-section">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}> {/* Call handleSubmit on form submit */}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>

        {/* "Already a member? Login here" section */}
        <div className="login-link">
          <p>
            Already a member?{' '}
            <span className="login-link-text" onClick={handleLoginRedirect}>
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
