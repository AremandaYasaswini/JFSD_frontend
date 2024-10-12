import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Products from './components/Products';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'; 
import { OrderProvider } from './components/OrderContext';
import Checkout from './components/Checkout';
import OrderPage from './components/Orders';
import OrderSummary from './components/OrderSummary';
import FeedbackForm from './components/Feedback';
import './App.css';

function App() {
  return (
    <CartProvider>
      <OrderProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <div className="hero-section">
                  <div className="hero-content">
                  <h1 class="dark-heading">Welcome to Harvest Haven</h1>
                    <p>Empowering farmers to create value-added products and connect with global buyers.</p>
                    <a href="/home" className="get-started-btn">Get Started</a>
                  </div>
                </div>
              </main>
            } />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} /> {/* Use 'element' instead of 'component' */}
            <Route path="/checkout" element={<Checkout />} /> {/* Corrected */}
            <Route path="/order-summary" element={<OrderSummary />} />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/feedback" element={<FeedbackForm />} />
          </Routes>
        </div>
      </Router>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
