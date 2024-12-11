import React, { useEffect, useState } from 'react';
import '../css/orders.css';
const ConfirmedOrders = () => {
  const [confirmedOrders, setConfirmedOrders] = useState([]);

  useEffect(() => {
    fetchConfirmedOrders();
  }, []);

  const fetchConfirmedOrders = async () => {
    try {
      const response = await fetch('/orders/confirmed'); // Adjust your API endpoint
      const data = await response.json();
      setConfirmedOrders(data);
    } catch (error) {
      console.error("Error fetching confirmed orders:", error);
    }
  };

  return (
    <div>
      <h2>Confirmed Orders</h2>
      <div className="orders-list">
        {confirmedOrders.length === 0 ? (
          <p>No confirmed orders available.</p>
        ) : (
          confirmedOrders.map((order) => (
            <div key={order.id} className="order-item">
              <img src={order.productImage} alt={order.productName} className="order-image" />
              <h3>{order.productName}</h3>
              <p>Price: ₹{order.productPrice}</p>
              <p>Quantity: {order.quantity} {order.unit}</p>
              <p>Status: {order.status}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ConfirmedOrders;
