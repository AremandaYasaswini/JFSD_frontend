import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const redirectToDashboard = () => {
    window.location.href = 'http://localhost:3000/admin/dashboard';
  };

  const redirectToOrders = () => {
    window.location.href = 'http://localhost:3000/farmer/orders?status=pending';
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="widgets">
          <div className="widget">
            <h3>Dashboard</h3>
            <p>Access detailed insights and manage the application effectively.</p>
            <button onClick={redirectToDashboard}>Go to Dashboard</button>
          </div>
          <div className="widget">
            <h3>System Metrics</h3>
            <p>Total Users: {users.length || dummyUsers.length}</p>
            <p>Total Orders: {orders.length || dummyOrders.length}</p>
            <p>Total Revenue: ₹{(orders.length > 0 
              ? totalOrderValue
              : dummyOrders.reduce((acc, order) => acc + order.totalPrice, 0)
            ).toFixed(2)}</p>
          </div>
          <div className="widget">
            <h3>View Orders</h3>
            <p>Check and manage pending orders placed by farmers.</p>
            <button onClick={redirectToOrders}>View Orders</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
