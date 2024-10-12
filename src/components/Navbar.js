// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { useCart } from './CartContext'; // Import the useCart hook
import '../css/Navbar.css'; // Adjust the path if needed
import logoImage from '../Images/logo.png'; // Replace with the actual path to your logo image

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cart } = useCart(); // Access the cart from context

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Simplified toggle
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close sidebar
  };

  return (
    <div className="navbar-container">
      {/* Top Navigation */}
      <nav className="top-nav">
        <button className="toggle-button" onClick={toggleSidebar}>☰</button>
        <div className="logo-container">
          <img src={logoImage} alt="HarvestHaven Logo" className="logo" />
          <span className="logo-text">HarvestHaven</span>
        </div>
      </nav>

      {/* Side Navigation */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>✖</button>
        <ul>
          <li onClick={closeSidebar}><Link to="/home">Home</Link></li>
          <li onClick={closeSidebar}><Link to="/products">Products</Link></li>
          <li onClick={closeSidebar}><Link to="/blog">Blog</Link></li>
          <li onClick={closeSidebar}><Link to="/login">Login</Link></li>
          <li onClick={closeSidebar}><Link to="/contact">Contact</Link></li>
          <li onClick={closeSidebar}>
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
          <li onClick={closeSidebar}><Link to="/orders">Orders</Link></li>
          <li onClick={closeSidebar}><Link to="/feedback">Feedback</Link></li> {/* Corrected position */}
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
