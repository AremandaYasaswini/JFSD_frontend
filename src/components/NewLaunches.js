import React, { useState, useEffect } from 'react';

const NewLaunches = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products/New Launch');
        if (response.ok) {
          const data = await response.json();
          setProducts(data); 
        } else {
          console.error('Failed to fetch products');
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
  }, []);

  return (
    <div>
      <h1>New Launches</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-list">
          {products.length === 0 ? (
            <p>No products found in the New Launch category.</p>
          ) : (
            products.map((product, index) => {
        
              const imageUrl = product.imageUrl || `http://localhost:8080/uploads/${product.image}`;

              return (
                <div key={index} className="product-item">
                  <img
                    src={imageUrl}  
                    alt={product.name}
                    width="100"
                  />
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                  <p>{product.category}</p>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default NewLaunches;
