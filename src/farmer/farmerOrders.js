import React, { useEffect, useState } from 'react';
import '../css/orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/orders'); // Adjust API endpoint as needed
      const data = await response.json();
      console.log("Fetched orders:", data);

      const pendingOrders = data.filter(order => order.status === "Pending");

      setOrders(pendingOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const updateOrderStatus = async (id, status) => {
    try {
      const response = await fetch(`/orders/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        // Refresh the orders list after status update
        fetchOrders();
      } else {
        console.error("Error updating order status");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div className="orders-container">
      <h2>Pending Orders</h2>

      <div className="orders-grid">
        {orders.length === 0 ? (
          <p>No pending orders available.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-item">
              <img src={order.productImage} alt={order.productName} className="order-image" />
              <h3>{order.productName}</h3>
              <p>Price: ₹{order.productPrice}</p>
              <p>Quantity: {order.quantity} {order.unit}</p>
              <p>Total Price: ₹{order.totalPrice}</p>
              <p>Customer: {order.customerName}</p>
              <p>Address: {order.customerAddress}, {order.customerCity}, {order.customerPostalCode}</p>
              <p>Payment Method: {order.paymentMethod}</p>
              <p>Status: Pending</p>
              <div className="order-actions">
                <button onClick={() => updateOrderStatus(order.id, "Confirmed")}>Confirm Order</button>
                <button onClick={() => updateOrderStatus(order.id, "Cancelled")}>Cancel Order</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
