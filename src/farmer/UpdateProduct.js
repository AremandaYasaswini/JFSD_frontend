import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    quantity: '',  // Add quantity
    unit: '',      // Add unit
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/products/id/${productId}`);
            const data = await response.json();
            if (response.ok) {
                console.log('Fetched product:', data);
                setProduct(data); 
            } else {
                console.error('Product not found or failed to fetch');
                alert('Product not found or failed to fetch.');
            }
        } catch (error) {
            console.error('Error fetching product:', error);
            alert('Error fetching product. Please try again.');
        }
    };

    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.quantity || !product.unit) {
      alert("Please fill out all fields.");
      return;
    }

    const formData = {
      name: product.name,
      price: product.price,
      image: product.image,  
      quantity: product.quantity, // Include quantity
      unit: product.unit,         // Include unit
    };

    try {
      const response = await fetch(`http://localhost:8080/api/products/update/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Product updated successfully!');
        navigate('/farmer/new-launches'); 
      } else {
        const data = await response.text();
        alert(`Error: ${data}`);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Unit:</label>
          <input
            type="text"
            name="unit"
            value={product.unit}
            onChange={handleChange}
          />
        </div>

        {product.image && (
          <div>
            <h4>Product Image:</h4>
            <img 
              src={`http://localhost:8080/api/products/image/${product.image}`} 
              alt="Product" 
              width="100" 
            />
          </div>
        )}

        <button type="submit" disabled={loading}>Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
