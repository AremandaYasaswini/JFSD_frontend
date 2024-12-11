import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import '../css/productlist.css';

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/products/${category}`);
        const data = await response.json();
        console.log('Fetched data:', data); 
        
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Expected an array of products but got:', data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  };

  const handleBuyNow = (product) => {
    navigate('/checkout', { state: { product } });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No products found in this category.</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-5">{category.charAt(0).toUpperCase() + category.slice(1)} Products</h1>
      <div className="product-row">
        {products.map((product, index) => {
          const imageUrl = process.env.PUBLIC_URL + product.image;

          // Determine the display unit based on category or product
          let unit = '';
          if (category === 'vegetables') {
            unit = 'kg'; // for vegetables like Tomato
          } else if (category === 'leafy-vegetables') {
            unit = 'bunch'; // for leafy vegetables like Methi
          } else {
            unit = 'per unit'; // default
          }

          return (
            <div key={index} className="fixed-card">
              <div className="card h-100">
                <img src={imageUrl} className="card-img-top product-image" alt={product.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title product-name">{product.name}</h5>
                  <p className="card-text product-price">
                    Price: {product.price} / {product.unit}
                  </p>
                  <div className="button-container">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => handleBuyNow(product)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
