// src/CheckoutForm.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/checkout.css';

const CheckoutForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'Credit Card',
  });

  if (!product) {
    return <div>No product found. Please go back to the product page.</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to order summary with product and form data
    navigate('/order-summary', { state: { product, formData } });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Proceed to Order Summary
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
