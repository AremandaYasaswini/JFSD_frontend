// Cart.js
import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import '../css/cart.css';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleIncrease = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (product) {
      updateQuantity(productId, product.quantity + 1);
    }
  };

  const handleDecrease = (productId) => {
    const product = cart.find((item) => item.id === productId);
    if (product && product.quantity > 1) {
      updateQuantity(productId, product.quantity - 1);
    } else {
      removeFromCart(product);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const priceNum = parseFloat(item.price.replace(/[^\d.-]/g, ''));
      return acc + priceNum * item.quantity;
    }, 0);
  };

  const total = calculateTotal();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items to proceed.');
      return;
    }
    navigate('/cartcheckout', { state: { cart, total } });
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="product-list">
          {cart.map((item) => (
            <div key={item.id} className="product-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-details">
                <h2 className="product-name">{item.name}</h2>
                <p className="product-price">Price: ₹{item.price}</p>
                <div className="quantity-control">
                  <button className="quantity-btn" onClick={() => handleDecrease(item.id)}>-</button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="quantity-btn" onClick={() => handleIncrease(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="total">
        <h3>Total: ₹{total.toFixed(2)}</h3>
      </div>
      {/* <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button> */}
    </div>
  );
};

export default Cart;
