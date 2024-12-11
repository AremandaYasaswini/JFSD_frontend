import React, { useEffect, useState } from 'react';
import '../css/orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8080/orders');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleCancelOrder = async (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this order?");
    if (confirmCancel) {
      try {
        await fetch(`http://localhost:8080/orders/${id}`, { method: 'DELETE' });
        fetchOrders(); // Refresh orders after deletion
        console.log("Order has been canceled successfully.");
      } catch (error) {
        console.error("Error canceling order:", error);
      }
    }
  };

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <div className="orders-grid">
        {orders.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          orders.map((order) => {
            const { id, productName, productPrice, productImage, quantity, unit } = order;

            return (
              <div key={id} className="order-item">
                <img src={productImage || 'default-image-url'} alt={productName || 'Product Image'} className="order-image" />
                <h3>{productName || 'Unknown Product'}</h3>
                <p>Price: ₹{productPrice || 'N/A'}</p>
                <p>Quantity: {quantity} {unit}</p>
                <button className="btn-cancel" onClick={() => handleCancelOrder(id)}>
                  Cancel Order
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Orders;
