import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Default Navbar (Buyer)
import FarmerNavbar from './farmer/FarmerNavbar'; // Farmer Navbar
// import AdminNavbar from './components/AdminNavbar'; // Admin Navbar
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
import FarmerRoutes from './farmer/FarmerRoutes';
import Admin from './components/Admin';
import './App.css';

function App() {
  const [role, setRole] = useState(localStorage.getItem('role')); // Track role state

  useEffect(() => {
    // Log the initial role when the component mounts
    console.log('Initial role:', role);

    // Listen to changes in localStorage and update the role state accordingly
    const onStorageChange = () => {
      const storedRole = localStorage.getItem('role');
      console.log('Role changed:', storedRole); // Log the updated role
      setRole(storedRole); // Update state
    };

    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, []); // Only run once on mount

  // Determine which navbar to show based on the role
  const renderNavbar = () => {
    if (role === 'BUYER') {
      return <Navbar />; // Display Buyer Navbar
    } else if (role === 'FARMER') {
      return <FarmerNavbar />; // Display Farmer Navbar
    } //else if (role === 'ADMIN') {
    //   return <AdminNavbar />; // Display Admin Navbar
    // } 
    else{
    return <Navbar />;
    }
  };

  return (
    <CartProvider>
      <OrderProvider>
        <Router>
          <div className="App">
            {renderNavbar()} {/* Render the appropriate navbar based on the role */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login setRole={setRole} />} /> {/* Pass setRole as a prop */}
              <Route path="/register" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:category" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-summary" element={<OrderSummary />} />
              <Route path="/orders" element={<OrderPage />} />
              <Route path="/feedback" element={<FeedbackForm />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/farmer/*" element={<FarmerRoutes />} />
            </Routes>
          </div>
        </Router>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
