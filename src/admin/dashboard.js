import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './dashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  const dummyUsers = [
    { username: 'farmer1', role: 'Farmer' },
    { username: 'buyer1', role: 'Buyer' },
    { username: 'admin', role: 'Admin' },
  ];

  const dummyOrders = [
    { orderId: 101, totalPrice: 500, status: 'Completed' },
    { orderId: 102, totalPrice: 300, status: 'Pending' },
    { orderId: 103, totalPrice: 200, status: 'Cancelled' },
  ];

  useEffect(() => {
    fetchUsers();
    fetchOrders();
    fetchInventory();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchInventory = async () => {
    try {
      const response = await axios.get('http://localhost:8080/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalOrderValue = orders.reduce((acc, order) => acc + order.totalPrice, 0);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="widgets">
          <div className="widget">
            <h3>User Management</h3>
            <p>Total Users: {users.length || dummyUsers.length}</p>
            <ul>
              {(users.length > 0 ? users : dummyUsers).map((user, index) => (
                <li key={index}>{user.username} - {user.role}</li>
              ))}
            </ul>
          </div>
          <div className="widget">
            <h3>System Metrics</h3>
            <p>Total Orders: {orders.length || dummyOrders.length}</p>
            <p>Total Revenue: ₹{(orders.length > 0 
              ? totalOrderValue
              : dummyOrders.reduce((acc, order) => acc + order.totalPrice, 0)
            ).toFixed(2)}</p>
          </div>
          <div className="widget">
            <h3>Orders Overview</h3>
            <ul>
              {(orders.length > 0 ? orders : dummyOrders).map((order, index) => (
                <li key={index}>Order #{order.orderId} - ₹{order.totalPrice} ({order.status})</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
