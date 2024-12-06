import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useCart } from './CartContext'; 
import '../css/Navbar.css'; 
import logoImage from '../Images/logo.png'; 
import LoginLogoutButton from './LoginLogoutButton';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cart } = useCart(); 
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev); 
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); 
  };

  return (
    <div className="navbar-container">
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="logo-container">
          <button className="toggle-button" onClick={toggleSidebar}>☰</button>
          <img src={logoImage} alt="HarvestHaven Logo" className="logo" />
          <span className="logo-text">HarvestHaven</span>
        </div>

        {/* Display Login or Logout Button */}
        <div className="navbar-right">
          <LoginLogoutButton />
        </div>
      </nav>

      {/* Side Navigation */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>✖</button>
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
