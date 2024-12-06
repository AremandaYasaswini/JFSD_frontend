import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/products.css';
import fruitsImg from '../Images/Fruits.jpeg';
import vegetablesImg from '../Images/vegetables.jpeg';
import leafyVeggiesImg from '../Images/leafy_vegetables.jpeg';
import milletsImg from '../Images/millets.jpeg';
import pulsesImg from '../Images/pulses.jpeg';
import nutsImg from '../Images/nuts.jpeg';

const Products = () => {
  const navigate = useNavigate(); 

  const categories = [
    { name: "Fruits", description: "Fresh and delicious fruits from local farms.", image: fruitsImg },
    { name: "Vegetables", description: "A variety of seasonal vegetables, picked at their peak.", image: vegetablesImg },
    { name: "Leafy Vegetables", description: "Nutritious leafy greens that are fresh and flavorful.", image: leafyVeggiesImg },
    { name: "Millets", description: "Healthy and sustainable grain options for a balanced diet.", image: milletsImg },
    { name: "Pulses", description: "High-protein pulses, perfect for a healthy meal.", image: pulsesImg },
    { name: "Nuts", description: "Wholesome and crunchy nuts for a nutritious snack or meal enhancement.", image: nutsImg },
  ];

  const handleViewProducts = (categoryName) => {
    navigate(`/products/${categoryName}`);
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
                onClick={() => handleViewProducts(category.name)}
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
