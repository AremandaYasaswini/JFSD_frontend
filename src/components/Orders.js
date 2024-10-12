import React from 'react';
import { useOrderContext } from './OrderContext';
import '../css/orders.css';

const Orders = () => {
  const { orders, updateOrders } = useOrderContext();

  const handleCancelOrder = (index) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this order?");
    if (confirmCancel) {
      const updatedOrders = orders.filter((_, i) => i !== index);
      updateOrders(updatedOrders);
      console.log("Order has been canceled successfully.");
    }
  };

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <div className="orders-grid">
        {Array.isArray(orders) && orders.length === 0 ? (
          <p>No orders placed yet.</p>
        ) : (
          Array.isArray(orders) ? (
            orders.map((order, index) => {
              if (!order || !order.product || !order.formData) {
                return <p key={index}>Order data is incomplete.</p>;
              }

              const { image, name, price } = order.product;

              return (
                <div key={index} className="order-item">
                  <img src={image} alt={name} className="order-image" />
                  <h3>{name}</h3>
                  <p>Price: ₹{price}</p>
                  <button className="btn-cancel" onClick={() => handleCancelOrder(index)}>
                    Cancel Order
                  </button>
                </div>
              );
            })
          ) : (
            <p>Error: Orders data is not available.</p>
          )
        )}
      </div>
    </div>
  );
};

export default Orders;
