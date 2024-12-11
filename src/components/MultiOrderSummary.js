// MultiOrderSummary.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/orderSummary.css';

const MultiOrderSummary = () => {
  const location = useLocation();
  const { orderData } = location.state || {};

  if (!orderData) {
    return <div>No order data available</div>;
  }

  const { user, cartItems, total } = orderData;

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>

      <div className="user-details">
        <h3>Shipping Details</h3>
        <p>Name: {user.fullName}</p>
        <p>Address: {user.address}</p>
        <p>City: {user.city}</p>
        <p>Postal Code: {user.postalCode}</p>
        <p>Payment Method: {user.paymentMethod}</p>
      </div>

      <div className="cart-items">
        <h3>Cart Items</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="product-info">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-details">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="total-price">
        <h3>Total: ₹{total.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default MultiOrderSummary;
