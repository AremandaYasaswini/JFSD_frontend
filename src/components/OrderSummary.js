import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useOrderContext } from './OrderContext';
import '../css/orderSummary.css';

const OrderSummary = () => {
  const location = useLocation();
  const { product, formData } = location.state || {};
  const navigate = useNavigate();
  const { addOrder } = useOrderContext();

  if (!product || !formData) {
    return <div>No order details found. Please go back to the product page.</div>;
  }

  const handlePlaceOrder = () => {
    const order = { product, formData }; // Ensure this is an object

    addOrder(order); // Add order to context

    alert('Order placed successfully!');
    navigate('/orders'); // Navigate to orders page
  };

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <div className="order-details">
        <div className="product-info">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
        <div className="shipping-info">
          <h4>Shipping Information</h4>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Address:</strong> {formData.address}, {formData.city}</p>
          <p><strong>Postal Code:</strong> {formData.postalCode}</p>
          <p><strong>Payment Method:</strong> {formData.paymentMethod}</p>
        </div>
      </div>
      <button className="btn btn-success" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
