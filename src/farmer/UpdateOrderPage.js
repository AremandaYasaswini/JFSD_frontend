import React, { useEffect, useState } from 'react';
import '../css/orders.css';

const UpdateOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders from the backend
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8080/orders'); // Ensure backend URL is correct
      const data = await response.json();

      console.log('Fetched orders:', data); // Debugging the response

      if (Array.isArray(data)) {
        setOrders(data);
      } else {
        console.error('Invalid response format:', data);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (orderId, newStatus) => {
    if (window.confirm(`Are you sure you want to change the status to ${newStatus}?`)) {
      try {
        const response = await fetch(`http://localhost:8080/orders/${orderId}/update`, { // Updated URL
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: newStatus }),
        });

        if (response.ok) {
          setOrders((prevOrders) =>
            prevOrders.map((order) =>
              order.id === orderId ? { ...order, status: newStatus } : order
            )
          );
          console.log('Order status updated successfully');
        } else {
          console.error('Error updating order status');
        }
      } catch (error) {
        console.error('Error updating status:', error);
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div>
      <h2>Update Orders</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="order-item">
                <img src={order.productImage} alt={order.productName} className="order-image" /> {/* Product Image */}
                <h3>{order.productName}</h3>
                <p>Price: ₹{order.productPrice}</p>
                <p>Customer: {order.customerName}</p> {/* Assuming customerName exists */}
                <p>Order Date: {formatDate(order.orderDate || new Date())}</p> {/* Default to today's date */}
                <p>Status: {order.status}</p>

                <div className="status-buttons">
                  <button
                    className={`status-btn ${order.status === 'Pending' ? 'active' : ''}`}
                    onClick={() => updateStatus(order.id, 'Pending')}
                  >
                    Pending
                  </button>
                  <button
                    className={`status-btn ${order.status === 'Confirmed' ? 'active' : ''}`}
                    onClick={() => updateStatus(order.id, 'Confirmed')}
                  >
                    Confirmed
                  </button>
                  <button
                    className={`status-btn ${order.status === 'Cancelled' ? 'active' : ''}`}
                    onClick={() => updateStatus(order.id, 'Cancelled')}
                  >
                    Cancelled
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No orders available to update.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UpdateOrderPage;
