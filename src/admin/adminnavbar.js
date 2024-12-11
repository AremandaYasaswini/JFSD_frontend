import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; 
import logoImage from '../Images/logo.png'; 
import LoginLogoutButton from '../components/LoginLogoutButton';

const FarmerNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
          <button className="toggle-button" onClick={toggleSidebar}>☰</button>
          <img src={logoImage} alt="HarvestHaven Logo" className="logo" />
          <span className="logo-text">HarvestHaven</span>
        </div>
        <div className="navbar-right">
          <LoginLogoutButton />
        </div>
      </nav>
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={toggleSidebar}>✖</button>
        <ul>
          <li onClick={closeSidebar}><Link to="/admin/">Home</Link></li>
          <li onClick={closeSidebar}><Link to="/admin/dashboard">Dashboard</Link></li> 
          <li onClick={closeSidebar}><Link to="/farmer/add-product">Add New Product</Link></li>
          <li onClick={closeSidebar}><Link to="/farmer/new-launches">View New Launches</Link></li>
          <li onClick={closeSidebar}><Link to="/farmer/orders?status=pending">View Orders</Link></li>
          <li onClick={closeSidebar}><Link to="/farmer/confirmed-orders?status=confirmed">Confirmed Orders</Link></li>
          <li onClick={closeSidebar}><Link to="/farmer/cancelled-orders?status=cancelled">Cancelled Orders</Link></li>
          <li onClick={closeSidebar}><Link to="/farmer/update-order">Update Order</Link></li> 
          
        </ul>
      </aside>

      <div className="main-content">
      </div>
    </div>
  );
};

export default FarmerNavbar;
