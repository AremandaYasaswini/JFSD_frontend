import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const LoginLogoutButton = () => {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    // Listen for login changes
    const handleLoginChange = () => {
      setUsername(localStorage.getItem('username'));
    };

    window.addEventListener('loginChange', handleLoginChange);

    return () => {
      window.removeEventListener('loginChange', handleLoginChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername(null);
    navigate('/login');
  };

  if (username) {
    return (
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    );
  }

  return (
    <Link to="/login" className="login-btn">
      Login
    </Link>
  );
};

export default LoginLogoutButton;
