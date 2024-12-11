import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    category: 'New Launch', 
    image: null,
    quantity: 10,  // Default value set to 10
    unit: 'kg',    // Default value set to 'kg'
  });

  const [imagePath, setImagePath] = useState(''); 
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    console.log("Uploading file:", file.name); 

    try {
      const response = await fetch('http://localhost:8080/api/products/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const filename = await response.text(); 
        setProduct((prevProduct) => ({
          ...prevProduct,
          image: filename, 
        }));
        setImagePath(URL.createObjectURL(file)); 

        console.log("File uploaded successfully, filename:", filename);
      } else {
        alert("Error uploading image");
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.image || !product.quantity || !product.unit) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    const formData = {
      name: product.name,
      price: product.price,
      category: product.category, 
      image: product.image, 
      quantity: product.quantity, // Send quantity
      unit: product.unit,         // Send unit
    };

    console.log("Form data before submission:", formData);

    try {
      const response = await fetch('http://localhost:8080/api/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Product added successfully!');
        const existingProducts = JSON.parse(localStorage.getItem('newLaunches')) || [];
        existingProducts.push(formData);
        localStorage.setItem('newLaunches', JSON.stringify(existingProducts));
        setProduct({
          name: '',
          price: '',
          category: 'New Launch',
          image: null,
          quantity: 10,  // Reset quantity to default 10
          unit: 'kg',    // Reset unit to default 'kg'
        });
        setImagePath('');
      } else {
        const data = await response.text();
        alert(`Error: ${data}`);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Add New Product</h2>
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
          <label>Unit(litre,kg,gm):</label>
          <input
            type="text"
            name="unit"
            value={product.unit}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            disabled={loading} 
          />
          {loading && <p>Uploading...</p>}
          {imagePath && !loading && (
            <div>
              <h4>Image Preview:</h4>
              <img src={imagePath} alt="Product Preview" width="100" />
            </div>
          )}
        </div>
        <button type="submit" disabled={loading}>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
