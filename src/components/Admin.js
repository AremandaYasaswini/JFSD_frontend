// src/components/Admin.js

import React from 'react';
import '../css/Admin.css';

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Welcome Admin!</h2>
        <p className="admin-subtitle">You have full access to manage the system.</p>
      </div>

      <div className="admin-dashboard">
        <h3>Admin Dashboard</h3>
        <p>Here you can manage users, view statistics, and control system settings.</p>

        <div className="dashboard-cards">
          <div className="card">
            <h4>Manage Users</h4>
            <p>View and update user accounts.</p>
          </div>
          <div className="card">
            <h4>View Statistics</h4>
            <p>Monitor system usage and activity.</p>
          </div>
          <div className="card">
            <h4>System Settings</h4>
            <p>Adjust configurations and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
