import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './dashboard.css';

const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  const dummyCartItems = [
    { productName: 'Banana', price: 20, quantity: 3 },
    { productName: 'Tomatoes', price: 15, quantity: 5 },
    { productName: 'Cashews', price: 30, quantity: 2 },
  ];

  const dummyLowStockItems = [
    { productName: 'Walnuts', currentStock: 5, reorderLevel: 10 },
    { productName: 'Toor Dal', currentStock: 8, reorderLevel: 15 },
    { productName: 'Little Millet', currentStock: 2, reorderLevel: 5 },
  ];

  useEffect(() => {
    fetchCartItems();
    fetchOrders();
    fetchInventory();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:8080/cart');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
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

  const totalCartValue = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalOrderValue = orders.reduce((acc, order) => acc + order.totalPrice, 0);
  const lowStockItems = inventory.filter((item) => item.currentStock < item.reorderLevel);

  return (
    <div className="dashboard">
      <h2>Farmer Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="widgets">
          <div className="widget">
            <h3>Cart Items</h3>
            <p>Total Items: {cartItems.length || dummyCartItems.length}</p>
            <p>Total Value: ₹{(cartItems.length > 0 
              ? totalCartValue 
              : dummyCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
            ).toFixed(2)}</p>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div key={index}>
                  <p>{item.productName}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))
            ) : (
              dummyCartItems.map((item, index) => (
                <div key={index}>
                  <p>{item.productName}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))
            )}
          </div>
          <div className="widget">
            <h3>Orders</h3>
            <p>Total Orders: {orders.length}</p>
            <p>Total Order Value: ₹{totalOrderValue.toFixed(2)}</p>
          </div>
          <div className="widget">
            <h3>Available Stock</h3>
            <p>Total Items: {inventory.length || dummyLowStockItems.length}</p>
            {lowStockItems.length > 0 ? (
              lowStockItems.map((item, index) => (
                <div key={index}>
                  <p>{item.productName}</p>
                  <p>Current Stock: {item.currentStock}</p>
                  <p>Reorder Level: {item.reorderLevel}</p>
                </div>
              ))
            ) : (
              dummyLowStockItems.map((item, index) => (
                <div key={index}>
                  <p>{item.productName}</p>
                  <p>Current Stock: {item.currentStock}</p>
                  <p>Reorder Level: {item.reorderLevel}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
