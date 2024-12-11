import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/orderSummary.css';

const OrderSummary = () => {
  const location = useLocation();
  const { product, formData, totalPrice } = location.state || {};
  const navigate = useNavigate();

  if (!product || !formData) {
    return <div>No order details found. Please go back to the product page.</div>;
  }

  const handlePlaceOrder = async () => {
    const order = {
      productName: product.name,
      productPrice: product.price,
      productImage: product.image,
      customerName: formData.name,
      customerAddress: formData.address,
      customerCity: formData.city,
      customerPostalCode: formData.postalCode,
      paymentMethod: formData.paymentMethod,
      quantity: formData.quantity,
      unit: product.unit,
      totalPrice: totalPrice, // Include total price in order details
    };

    try {
      await axios.post('http://localhost:8080/orders/create', order);
      alert('Order placed successfully!');
      navigate('/orders');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <div className="order-details">
        <div className="product-info">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Quantity: {formData.quantity} {product.unit}</p>
          <p>Total Price: ₹{totalPrice}</p> {/* Display Total Price */}
        </div>
        <div className="shipping-info">
          <h4>Shipping Information</h4>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Address:</strong> {formData.address}, {formData.city}</p>
          <p><strong>Postal Code:</strong> {formData.postalCode}</p>
          <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
        </div>
      </div>
      <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default OrderSummary;
