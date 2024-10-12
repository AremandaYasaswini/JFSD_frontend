// src/ProductList.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import '../css/productlist.css';
import f1 from '../Images/Fruits/banana.jpeg';
import f2 from '../Images/Fruits/mango.jpeg';
import f3 from '../Images/Fruits/papaya.jpeg';
import f4 from '../Images/Fruits/Guava.jpeg';
import f5 from '../Images/Fruits/pineapple.jpeg';
import f6 from '../Images/Fruits/coconut.jpeg';
import v1 from '../Images/veggies/tomato.jpeg';
import v2 from '../Images/veggies/cucumber.jpeg';
import v3 from '../Images/veggies/cauli.jpeg';
import v4 from '../Images/veggies/bell.jpeg';
import v5 from '../Images/veggies/carrots.jpeg';
import v6 from '../Images/veggies/radish.jpeg';
import l1 from '../Images/leaf/l1.jpeg';
import l2 from '../Images/leaf/l2.jpeg';
import l3 from '../Images/leaf/l3.jpeg';
import l4 from '../Images/leaf/l4.jpeg';
import l5 from '../Images/leaf/l5.jpeg';
import l6 from '../Images/leaf/l6.jpeg';
import m1 from '../Images/millets/m1.jpeg';
import m2 from '../Images/millets/m2.jpeg';
import m3 from '../Images/millets/m3.jpeg';
import m4 from '../Images/millets/m4.jpeg';
import m5 from '../Images/millets/m5.jpeg';
import m6 from '../Images/millets/m6.jpeg';
import p1 from '../Images/pulses/p1.jpeg';
import p2 from '../Images/pulses/p2.jpeg';
import p3 from '../Images/pulses/p3.jpeg';
import p4 from '../Images/pulses/p4.jpeg';
import p5 from '../Images/pulses/p5.jpeg';
import p6 from '../Images/pulses/p6.jpeg';
import n1 from '../Images/nuts/n1.jpeg';
import n2 from '../Images/nuts/n2.jpeg';
import n3 from '../Images/nuts/n3.jpeg';
import n4 from '../Images/nuts/n4.jpeg';
import n5 from '../Images/nuts/n5.jpeg';
import n6 from '../Images/nuts/n6.jpeg';

const productData = {
  fruits: [
    { name: "Banana", price: "₹75", image: f1 },
    { name: "Mango", price: "₹187.50", image: f2 },
    { name: "Papaya", price: "₹150", image: f3 },
    { name: "Guava", price: "₹112.50", image: f4 },
    { name: "Pineapple", price: "₹225", image: f5 },
    { name: "Coconut", price: "₹131.25", image: f6 },
  ],
  vegetables: [
    { name: "Tomato", price: "₹60", image: v1 },
    { name: "Cucumber", price: "₹50", image: v2 },
    { name: "Cauliflower", price: "₹90", image: v3 },
    { name: "Bell Pepper (Capsicum)", price: "₹80", image: v4 },
    { name: "Carrot", price: "₹75", image: v5 },
    { name: "Radish", price: "₹45", image: v6 },
  ],
  leafy_greens: [
    { name: "Spinach", price: "₹112.50", image: l1 },
    { name: "Methi (Fenugreek Leaves)", price: "₹90", image: l2 },
    { name: "Amaranth Leaves (Thandu Keerai)", price: "₹97.50", image: l3 },
    { name: "Mustard Greens", price: "₹105", image: l4 },
    { name: "Curry Leaves", price: "₹60", image: l5 },
    { name: "Cilantro (Coriander Leaves)", price: "₹75", image: l6 },
  ],
  millets: [
    { name: "Pearl Millet (Bajra)", price: "₹112.50", image: m1 },
    { name: "Finger Millet (Ragi)", price: "₹127.50", image: m2 },
    { name: "Foxtail Millet", price: "₹120", image: m3 },
    { name: "Barnyard Millet", price: "₹135", image: m4 },
    { name: "Little Millet", price: "₹105", image: m5 },
    { name: "Kodo Millet", price: "₹120", image: m6 },
  ],
  pulses: [
    { name: "Toor Dal (Pigeon Pea)", price: "₹150", image: p1 },
    { name: "Moong Dal (Green Gram)", price: "₹135", image: p2 },
    { name: "Chana Dal (Bengal Gram)", price: "₹165", image: p3 },
    { name: "Urad Dal (Black Gram)", price: "₹157.50", image: p4 },
    { name: "Masoor Dal (Red Lentil)", price: "₹142.50", image: p5 },
    { name: "Black-eyed Peas", price: "₹150", image: p6 },
  ],
  nuts: [
    { name: "Cashews", price: "₹225", image: n1 },
    { name: "Almonds", price: "₹262.50", image: n2 },
    { name: "Peanuts", price: "₹112.50", image: n4 },
    { name: "Walnuts", price: "₹300", image: n5 },
    { name: "Pistachios", price: "₹337.50", image: n6 },
    { name: "Hazelnuts", price: "₹375", image: n3 },
  ],
};

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = () => {
      const fetchedProducts = productData[category] || [];
      setProducts(fetchedProducts);
      setLoading(false);
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
        {products.map((product, index) => (
          <div key={index} className="fixed-card">
            <div className="card h-100">
              <img src={product.image} className="card-img-top product-image" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title product-name">{product.name}</h5>
                <p className="card-text product-price">Price: {product.price}</p>
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
        ))}
      </div>
    </div>
  );
}

export default ProductList;
