import React from 'react';
import { useCart } from './CartContext';
import '../css/cart.css'; // Ensure your CSS has styles for card layout

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemove = (index) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      removeFromCart(index); // Proceed with removing the item
    }
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="product-list">
          {cart.map((item, index) => (
            <div key={index} className="product-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
