// src/Products.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import '../css/products.css';
import fruitsImg from '../Images/Fruits.jpeg';
import vegetablesImg from '../Images/vegetables.jpeg';
import leafyVeggiesImg from '../Images/leafy_vegetables.jpeg';
import milletsImg from '../Images/millets.jpeg';
import pulsesImg from '../Images/pulses.jpeg';
import nutsImg from '../Images/nuts.jpeg';
const Products = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const categories = [
    {
      name: "Fruits",
      description: "Fresh and delicious fruits from local farms.",
      image: fruitsImg, 
      path: "/products/fruits",
    },
    {
      name: "Vegetables",
      description: "A variety of seasonal vegetables, picked at their peak.",
      image: vegetablesImg, // Use imported image
      path: "/products/vegetables",
    },
    {
      name: "Leafy Greens",
      description: "Nutritious leafy greens that are fresh and flavorful.",
      image: leafyVeggiesImg, // Use imported image
      path: "/products/leafy_greens",
    },
    {
      name: "Millets",
      description: "Healthy and sustainable grain options for a balanced diet.",
      image: milletsImg, // Use imported image
      path: "/products/millets",
    },
    {
      name: "Pulses",
      description: "High-protein pulses, perfect for a healthy meal.",
      image: pulsesImg, // Use imported image
      path: "/products/pulses",
    },
    {
      name: "Nuts",
      description: "Wholesome and crunchy nuts for a nutritious snack or meal enhancement.",
      image: nutsImg, // Use imported image
      path: "/products/nuts",
    },
  ];

  const handleViewProducts = (path) => {
    navigate(path); // Navigate to the specific category page
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Our Products</h1>
      <div className="products-grid">
        {categories.map((category, index) => (
          <div className="product-card" key={index}>
            <img src={category.image} alt={category.name} className="product-image" />
            <div className="product-content">
              <h2 className="product-name">{category.name}</h2>
              <p className="product-description">{category.description}</p>
              <button 
                className="view-products-btn" 
                onClick={() => handleViewProducts(category.path)}
              >
                View Products
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
