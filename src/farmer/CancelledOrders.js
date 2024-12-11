import React, { useEffect, useState } from 'react';
import '../css/orders.css';
const CancelledOrders = () => {
  const [cancelledOrders, setCancelledOrders] = useState([]);

  useEffect(() => {
    fetchCancelledOrders();
  }, []);

  const fetchCancelledOrders = async () => {
    try {
      const response = await fetch('/orders/cancelled'); // Adjust the API endpoint for cancelled orders
      const data = await response.json();
      setCancelledOrders(data);
    } catch (error) {
      console.error("Error fetching cancelled orders:", error);
    }
  };

  return (
    <div>
      <h2>Cancelled Orders</h2>
      <div className="orders-list">
        {cancelledOrders.length === 0 ? (
          <p>No cancelled orders available.</p>
        ) : (
          cancelledOrders.map((order) => (
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

export default CancelledOrders;
