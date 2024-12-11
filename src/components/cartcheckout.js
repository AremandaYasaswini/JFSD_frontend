// MultiCheckout.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MultiCheckout() {
  const [orderData, setOrderData] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'Cash on Delivery',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({ ...orderData, [name]: value });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        const responseData = await response.json();
        navigate('/cart-order-summary', { state: { orderData: responseData } });
      } else {
        setError('Failed to process your order. Please try again.');
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={orderData.fullName} onChange={handleInputChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={orderData.address} onChange={handleInputChange} required />
        </label>
        <label>
          City:
          <input type="text" name="city" value={orderData.city} onChange={handleInputChange} required />
        </label>
        <label>
          Postal Code:
          <input type="text" name="postalCode" value={orderData.postalCode} onChange={handleInputChange} required />
        </label>
        <label>
          Payment Method:
          <select name="paymentMethod" value={orderData.paymentMethod} onChange={handleInputChange} required>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
          </select>
        </label>
        <button type="submit">Proceed to Order Summary</button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default MultiCheckout;
