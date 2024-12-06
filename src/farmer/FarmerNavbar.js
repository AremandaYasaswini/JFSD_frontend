import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../css/Navbar.css'; 
import logoImage from '../Images/logo.png'; 
import LoginLogoutButton from '../components/LoginLogoutButton';

const FarmerNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Close the sidebar
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
        <li onClick={closeSidebar}><Link to="/farmer/">Home</Link></li>
          <li onClick={closeSidebar}><Link to="/farmer/add-product">Add New Product</Link></li>
          <li onClick={closeSidebar}><Link to="/farmer/new-launches">View New Launches</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* You can add additional content here, such as routes or child components */}
      </div>
    </div>
  );
};

export default FarmerNavbar;
