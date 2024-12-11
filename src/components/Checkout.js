import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/checkout.css';

const CheckoutForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // Get product data from location state
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'Credit Card',
    quantity: 1, // Initialize quantity
    unit: product ? product.unit : '', // Initialize unit from product
  });

  const [totalPrice, setTotalPrice] = useState(product ? product.price : 0); // Initialize total price

  useEffect(() => {
    if (product) {
      // Update total price when quantity changes
      setTotalPrice(product.price * formData.quantity);
    }
  }, [formData.quantity, product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'postalCode') {
      // Allow only numerical digits and ensure it is not more than 6 digits
      if (/^\d{0,6}$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'quantity') {
      // Convert quantity to number and update if it's a positive number or empty
      const quantityValue = value ? parseInt(value, 10) : ''; // Parse the value to number
      if (!isNaN(quantityValue) && quantityValue > 0) {
        setFormData({ ...formData, [name]: quantityValue });
      } else if (value === '') {
        // Allow clearing the input
        setFormData({ ...formData, [name]: '' });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order-summary', { state: { product, formData, totalPrice } });
  };

  if (!product) {
    return <div>No product found. Please go back to the product page.</div>;
  }

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
            pattern="\d{6}"
            title="Postal code must be exactly 6 digits"
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
            <option value="Cash On Delivery">Cash On Delivery</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
            min="1"
          />
        </div>
        <div className="form-group">
          <label>Total Price</label>
          <p>₹{totalPrice}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Proceed to Order Summary
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
