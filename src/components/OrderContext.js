import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]); // Initialize as an empty array

  const addOrder = (newOrder) => {
    // Ensure newOrder is an object
    if (typeof newOrder === 'object' && newOrder !== null) {
      setOrders((prevOrders) => [...prevOrders, newOrder]); // Append new order
    } else {
      console.error('Invalid order data:', newOrder);
    }
  };

  const updateOrders = (updatedOrders) => {
    setOrders(updatedOrders); // Update orders with the new array
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
