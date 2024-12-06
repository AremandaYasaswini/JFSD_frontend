import React from 'react';
import { useCart } from './CartContext';
import '../css/cart.css';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Handle increase in quantity
  const handleIncrease = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product) {
      updateQuantity(productId, product.quantity + 1);
    }
  };

  // Handle decrease in quantity
  const handleDecrease = (productId) => {
    const product = cart.find(item => item.id === productId);
    if (product && product.quantity > 1) {
      updateQuantity(productId, product.quantity - 1);
    } else {
      removeFromCart(product);
    }
  };

  // Function to calculate total price of the entire cart
  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      const priceNum = parseFloat(item.price.replace(/[^\d.-]/g, '')); // Remove ₹ symbol and convert to number
      return acc + (priceNum * item.quantity);
    }, 0);
  };

  const total = calculateTotal(); // Get the total price of the cart

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="product-list">
          {cart.map((item) => (
            <div key={item.id} className="product-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <h2>{item.name}</h2>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-control">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <div className="total">
        <h3>Total: ₹{total.toFixed(2)}</h3> {/* Display the total with two decimal places */}
      </div>
    </div>
  );
};

export default Cart;
