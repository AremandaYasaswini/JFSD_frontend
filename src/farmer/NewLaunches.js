import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewLaunches = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products/New Launch');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);  // Data now includes the full image URL for "New Launch"
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

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:8080/api/products/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setProducts(products.filter((product) => product.id !== productId));
        alert('Product deleted successfully');
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product. Please try again.');
    }
  };

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
            products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-image">
                  <img
                    src={product.image}  // Assuming image URL is properly set
                    alt={product.name}
                    width="200"  // Adjust width as needed
                    height="200" // Adjust height for consistency
                  />
                </div>
                <div className="product-info">
                  <p> {product.name}</p>
                  <p><strong>Price:</strong>{product.price}</p>
                </div>
                <div className="product-actions">
                  <Link to={`/farmer/update-product/${product.id}`}>
                    <button>Update</button>
                  </Link>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NewLaunches;
