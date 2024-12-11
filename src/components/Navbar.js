import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import '../css/Navbar.css';
import logoImage from '../Images/logo.png';
import LoginLogoutButton from './LoginLogoutButton';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cart } = useCart();

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="navbar-container">
      <nav className="top-nav">
        <div className="logo-container">
          <button
            className="toggle-button"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
            aria-expanded={isSidebarOpen ? 'true' : 'false'}
          >
            ☰
          </button>
          <img src={logoImage} alt="HarvestHaven Logo" className="logo" />
          <span className="logo-text">HarvestHaven</span>
        </div>

        <div className="navbar-right">
          <LoginLogoutButton />
        </div>
      </nav>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar} aria-label="Close Sidebar">✖</button>
        <ul>
          <li onClick={closeSidebar}><Link to="/">Home</Link></li>
          <li onClick={closeSidebar}><Link to="/products">Products</Link></li>
          <li onClick={closeSidebar}><Link to="/blog">Blog</Link></li>
          <li onClick={closeSidebar}><Link to="/contact">Contact</Link></li>
          <li onClick={closeSidebar}>
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
          <li onClick={closeSidebar}><Link to="/orders">Orders</Link></li>
          <li onClick={closeSidebar}><Link to="/feedback">Feedback</Link></li>
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
