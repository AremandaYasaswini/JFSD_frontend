import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginLogoutButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Sync state with session/local storage on load
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users/check-session', { withCredentials: true });
        if (response.status === 200 && response.data.username) {
          setIsLoggedIn(true);
          localStorage.setItem('username', response.data.username);
        } else {
          setIsLoggedIn(false);
          localStorage.removeItem('username');
        }
      } catch (error) {
        setIsLoggedIn(false);
        localStorage.removeItem('username');
      }
    };

    checkSession();

    // Listen for login/logout changes
    const handleLoginChange = () => {
      setIsLoggedIn(!!localStorage.getItem('username'));
    };
    window.addEventListener('loginChange', handleLoginChange);

    return () => {
      window.removeEventListener('loginChange', handleLoginChange);
    };
  }, []);

  // Logout handler
  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:8080/users/logout', { withCredentials: true });
      localStorage.removeItem('username');
      setIsLoggedIn(false);
      window.dispatchEvent(new Event('loginChange'));
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return isLoggedIn ? (
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  ) : (
    <Link to="/login" className="login-btn">
      Login
    </Link>
  );
};

export default LoginLogoutButton;
