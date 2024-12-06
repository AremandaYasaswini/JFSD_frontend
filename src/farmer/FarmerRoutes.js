import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FarmerNavbar from './FarmerNavbar';  // Import the FarmerNavbar
import FarmerHome from './FarmerHome'; 
import AddProduct from './AddProduct';
import NewLaunches from './NewLaunches';
import UpdateProduct from './UpdateProduct';

const FarmerRoutes = () => {
  return (
    <div>

      {/* Define the Routes for the Farmer */}
      <Routes>
        <Route path="/" element={<FarmerHome />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="new-launches" element={<NewLaunches />} />
        <Route path="update-product/:productId" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
};

export default FarmerRoutes;
