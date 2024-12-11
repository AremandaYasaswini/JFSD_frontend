import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import FarmerHome from './FarmerHome'; 
import AddProduct from './AddProduct';
import NewLaunches from './NewLaunches';
import UpdateProduct from './UpdateProduct';
import Orders from './farmerOrders';
import ConfirmedOrders from './ConfirmedOrders';
import CancelledOrders from './CancelledOrders';  
import UpdateOrderPage from './UpdateOrderPage'; 
import Dashboard from './dashboard';
const FarmerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FarmerHome />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="new-launches" element={<NewLaunches />} />
        <Route path="update-product/:productId" element={<UpdateProduct />} />
        <Route path="orders" element={<Orders />} />
        <Route path="confirmed-orders" element={<ConfirmedOrders />} />
        <Route path="cancelled-orders" element={<CancelledOrders />} />  
        <Route path="update-order" element={<UpdateOrderPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default FarmerRoutes;
